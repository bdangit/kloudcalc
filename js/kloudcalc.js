$(function() {
  // MODELS!
  var ComputeBlock = Backbone.Model.extend({
    defaults: function() {
      return {
        "qty": 1,
        "name": "Server",
        "instanceSize": AWS.COMPUTE.EC2.T1_MICRO,
        "os": OS.LINUX,
        "region": AWS.REGIONS.US_EAST_1,
        "hoursPerMonth": 730,
        "cost": "0.00"
      };
    },
    
    initialize: function() {
      this.bind("change:qty", function() { this.calc(); });
      this.bind("change:hoursPerMonth", function() { this.calc(); });
      this.bind("change:instanceSize", function() { this.calc(); });
      this.bind("change:os", function() { this.calc(); });
      this.bind("change:region", function() { this.calc(); });
    },
    
    calc: function() {
      // lookup hourly cost by instance_size and region
      var unitCost = 0.000;
      
      // schema VENDOR.SERVICE.SIZE.OS.REGION
      if (this.get("os") == OS.LINUX) {
        var tmp = this.get("instanceSize").LINUX;
        for (var region in tmp) {
          if (this.get("region").index == tmp[region].index) {
            unitCost = tmp[region].price;
            break;
          };
        };
      } else if (this.get("os") == OS.WIN) {
        var tmp = this.get("instanceSize").WIN;
        for (var region in tmp) {
          if (this.get("region").index == tmp[region].index) {
            unitCost = tmp[region].price;
            break;
          };
        };
      } else {
        console.log("can't find OS");
      };
      
      // store answer
      this.set({"cost": (this.get("qty") * this.get("hoursPerMonth") * unitCost).toFixed(2)});
//console.log(this.get("qty") + "x " + this.get("instanceSize").name + " " + this.get("os").name + " " + this.get("region").code + "\t " + this.get("hoursPerMonth") + "\t $" + unitCost.toFixed(3) + " --> $" + this.get("cost"));
//console.log(this.toJSON());
    },
    
    clear: function() {
      this.destroy();
    }
  });
  //var testBlock1 = new ComputeBlock();
  //this.testBlock1.calc();
  //testBlock1.set({"qty":1, "hoursPerMonth":1000});
  
  var StorageBlock = Backbone.Model.extend({
    qty: 1,
    name: "Data Volume",
    size: 20, // gb
    vendor: VENDORS.AWS,
    region: AWS.REGIONS.US_EAST_1,
    cost: "0.00"
    
    //
    //defaults: function() {
    //  return {
    //    qty: 1,
    //    name: "Data Volume",
    //    size: 1, // gb
    //    vendor: VENDORS.AWS,
    //    region: AWS.REGIONS.US_EAST_1,
    //    cost: "0.00"
    //  };
    //}
  });
  
  var AWSEBSStorageBlock = StorageBlock.extend({
    defaults: function() {
      return {
        ioRequests: 10  // million (light 10, medium 100, heavy 500, very heavy 1000)
                        //          storing of data, anything dependent on reading/writing 
                        //          databases          
      };
    }
  });
  var testBlock2 = new AWSEBSStorageBlock();
  console.log(testBlock2);
  console.log(testBlock2 instanceof StorageBlock);
  
  
  // VIEWS!
  var ComputeBlockView = Backbone.View.extend({
    model: ComputeBlock,
    tagName: "div",
    className: "row",
    attributes: {"style":"margin-bottom: 20px"},
    blockId: 0,
    
    template: _.template($('#compute-block-template').html()),
    
    events: {
      "click button.destroy" : "clear",
      "keyup #qty" : "setQty",
      "keyup #name" : "setName",
      "change #os" : "setOS",
      "keyup #os" : "setOS",
      "change #instance-size" : "setInstanceSize",
      "keyup #instance-size" : "setInstanceSize",
      "change #region" : "setRegion",
      "keyup #region" : "setRegion",
      "keyup #hours-per-month" : "setHoursPerMonth"
    },
    
    initialize: function() {
      if (this.options.blockId) {
        this.blockId = this.options.blockId;
      }
      
      this.model.bind('destroy', this.remove, this);
    },
    
    render: function() {
      this.model.calc();
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    
    setQty: function() {
      // get current value
      var value = this.$("#qty").val();
      
      // save it to model as int
      this.model.set({"qty": parseInt(value,10)});
//console.log("qty : " + this.model.get("qty"));
      
      this.updateCost();
    },
    
    setName: function() {
      // get current value
      var value = this.$("#name").val();
      
      // save it to model
      this.model.set({"name": value});
    },
    
    setOS: function() {
      // get current value
      var value = this.$("#os").val();
      
      // iterate to find what OS it is
      // if found store it
      if (value == "Linux") {
        this.model.set({"os": OS.LINUX});
      } else if (value == "Windows") {
        this.model.set({"os": OS.WIN});
      } else {
        console.log("can't find OS");
      }
      
      this.updateCost();
    },
    
    setInstanceSize: function() {
      // get current value
      var value = this.$("#instance-size").val();
      
      // iterate through AWS dictionary to find the size
      // if found store it
      for (sz in AWS.COMPUTE.EC2) {
        if (value == AWS.COMPUTE.EC2[sz].name) {
          this.model.set({"instanceSize": AWS.COMPUTE.EC2[sz]});
          break;
        }
      }
      
      this.updateCost();
    },

    setRegion: function() {
      // get current value
      var value = this.$("#region").val();
      
      // iterate through AWS dictionary to find the size
      // if found store it
      for (region in AWS.REGIONS) {
        if (value == AWS.REGIONS[region].name) {
          this.model.set({"region": AWS.REGIONS[region]});
          break;
        }
      }
      
      this.updateCost();
    },

    setHoursPerMonth: function() {
      var value = this.$("#hours-per-month").val();
      
      this.model.set({"hoursPerMonth": parseInt(value,10)});
//console.log("hoursPerMonth : " + this.model.get("hoursPerMonth"));
      this.updateCost();
    },
    
    updateCost: function() {
      var costField = this.$("#cost");      
      var cost = this.model.get("cost");
      
      if (cost == "NaN") {
        cost = "0.00";
      }
      costField.text("$" + cost);
    },
    
    clear: function() {
      console.log("[" + this.blockId + "] Goodbye " + this.model.get("name") + "!");
      this.model.clear();
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $("#kloudcalc-app"),
    
    // used to keep track of how many blocks are added to the view
    numBlocks: 1,    
    
    events: {
      "click #add-compute-block":  "addComputeBlock",
      "keyup '#block-list,#cost'": "updateTotalCost",
      "click '#block-list,#cost'": "updateTotalCost",
      "change '#block-list,#cost'": "updateTotalCost",
      "click '#block-list,button.destroy'": "updateTotalCost"
    },
    
    initialize: function () {
      if (this.options.numBlocks) {
        this.numBlocks = this.options.numBlocks;
      }
    
      this.header = this.$("#header");
      this.totalCostField = this.$("#total-cost");
      this.blockList = this.$("#block-list");
      this.main = this.$("#main");
      this.footer = this.$("footer");
    },
    
    addComputeBlock: function () {
      // create a new ComputeBlockView
      var view = new ComputeBlockView({ 
        model: new ComputeBlock(),
        id: "compute-block-" + this.numBlocks,
        blockId: this.numBlocks
      });
      //console.log("numBlocks: " + this.numBlocks);
      this.numBlocks = this.numBlocks + 1;
      
      // add ComputeBlockView to the List
      this.blockList.append(view.render().el);
      
      // make sure to update the total cost
      this.updateTotalCost();
    },
    
    updateTotalCost: function () {
      var totalCost = 0.00;
      // extract all costs
      this.$("#cost").each(function (index) {
        totalCost = totalCost + parseFloat( ($(this).text()).split("$")[1] );
      });
      
      // update total cost
      this.totalCostField.text("$" + totalCost.toFixed(2));
    }
  });
  var App = new AppView();
  
});