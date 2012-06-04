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
        cost: 0.00
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
            unit_cost = tmp[region].price;
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
      this.set({"cost": this.get("qty") * this.get("hoursPerMonth") * unitCost});
      
      console.log(this.get("qty") + "x " + this.get("instanceSize").name + " " + this.get("os").name + " " + this.get("region").code + "\t " + this.get("hoursPerMonth") + "\t $" + unitCost.toFixed(3) + " --> $" + this.get("cost").toFixed(2));
    },
    
    clear: function() {
      console.log("goodbye " + this.get("name"));
      this.destroy();
    }
  });
  
  // VIEWS!
  var ComputeBlockView = Backbone.View.extend({
    model: ComputeBlock,
    tagName: "div",
    className: "row",
    attributes: {"style":"height: 48px"},
    
    template: _.template($('#compute-block-template').html()),
    
    events: {
      "click button.destroy" : "clear",
      "keypress #qty" : "setQty"
    },
    
    initialize: function() {
      //this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
      console.log(this.model.toJSON());
    },
    
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    
    setQty: function() {
      var value = this.$("#qty").val();
      this.model.set({"qty": value});
      console.log(this.id + " " + value);
    },
    
    clear: function() {
      console.log("goodbye server " + this.blockId);
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
      this.main = this.$("#main");
      this.footer = this.$("#footer");
    },
    
    addComputeBlock: function () {
      console.log("numBlocks:" + this.numBlocks)
      var view = new ComputeBlockView({ 
        model: new ComputeBlock(),
        id: "#compute-block-" + this.numBlocks,
        blockId: this.numBlocks
      });
      this.numBlocks = this.numBlocks + 1;
      this.$("#block-list").append(view.render().el);;
    }
  });
  var App = new AppView;
  
});