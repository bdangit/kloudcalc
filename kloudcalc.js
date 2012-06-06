$(function() {
  // MODELS!
  var ComputeBlock = Backbone.Model.extend({
    defaults: function() {
      return {
        qty: 0,
        name: "Server",
        instanceSize: AWS.EC2.T1_MICRO,
        os: OS.LINUX,
        region: AWS.REGIONS.US_EAST_1,
        hoursPerMonth: 730,
        cost: "0.00"
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
            //console.log("region : " + region);
            unitCost = tmp[region].price;
            //console.log("calculated unit cost");
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
  
  
  // VIEWS!
  var ComputeBlockView = Backbone.View.extend({
    model: ComputeBlock,
    tagName: "div",
    className: "row-fluid",
    attributes: {"style":"height: 48px"},
    
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
    
    defaults: function() {
      return {
        blockId: 0
      };
    },
    
    initialize: function() {
      this.model.bind('destroy', this.remove, this);
    },
    
    render: function() {
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
      for (sz in AWS.EC2) {
        if (value == AWS.EC2[sz].name) {
          this.model.set({"instanceSize": AWS.EC2[sz]});
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
      console.log("[" + this.options.blockId + "] Goodbye " + this.model.get("name") + "!");
      this.model.clear();
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $("#kloudcalc-app"),
    
    events: {
      "click #add-compute-block":  "addComputeBlock",
      "keyup '#block-list,#cost'": "updateTotalCost",
      "click '#block-list,#cost'": "updateTotalCost",
      "click '#block-list,button.destroy'": "updateTotalCost"
    },
   
    defaults: function() {
      return {
        // used to keep track of how many blocks are added to the view
        numBlocks: 1,
      };
    },
    
    initialize: function () {
      this.header = this.$("#header");
      this.totalCostField = this.$("#total-cost");
      this.blockList = this.$("#block-list");
      this.main = this.$("#main");
      this.footer = this.$("#footer");
    },
    
    addComputeBlock: function () {
      // create a new ComputeBlockView
      var view = new ComputeBlockView({ 
        model: new ComputeBlock(),
        id: "compute-block-" + this.numBlocks,
        blockId: this.numBlocks
      });
      this.numBlocks = this.numBlocks + 1;
      
      // add ComputeBlockView to the List
      this.blockList.append(view.render().el);
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
  var App = new AppView;
  
});