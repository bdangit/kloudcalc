$(function() {
  // MODELS!
  var ComputeBlock = Backbone.Model.extend({
    defaults: function() {
      return {
        qty: 0,
        name: "Server",
        instanceSize: AWS.EC2.M1_SMALL,
        os: OS.LINUX,
        region: AWS.REGIONS.US_EAST_1,
        hoursPerMonth: 0,
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
      console.log("goodbye " + this.get("name"));
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
    className: "row",
    attributes: {"style":"height: 48px"},
    
    template: _.template($('#compute-block-template').html()),
    
    events: {
      "click button.destroy" : "clear",
      "keyup #qty" : "setQty",
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
      var value = this.$el.find("#qty").val();
      this.model.set({"qty": parseInt(value,10)});
      console.log("qty : " + this.model.get("qty"));
      this.updateCost();
    },

    setHoursPerMonth: function() {
      var value = this.$el.find("#hours-per-month").val();
      this.model.set({"hoursPerMonth": parseInt(value,10)});
      console.log("hoursPerMonth : " + this.model.get("hoursPerMonth"));
      this.updateCost();
    },
    
    updateCost: function() {
      costField = this.$el.find("#cost");
      
      var cost = this.model.get("cost");
      if (cost == "NaN") {
        cost = "0.00";
      }
      costField.text("$" + cost);
    },
    
    clear: function() {
      console.log("goodbye server " + this.options.blockId);
      this.model.clear();
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $("#kloudcalc-app"),
    
    // used to keep track of how many blocks are added to the view
    numBlocks: 1,
    
    events: {
      "click #add-compute-block":  "addComputeBlock"
    },
    
    initialize: function () {
      this.header = this.$("#header");
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
    }
  });
  var App = new AppView;
  
});