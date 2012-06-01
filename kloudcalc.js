$(function() {
  // MODELS!
  var ComputeBlock = Backbone.Model.extend({
    defaults: function() {
      return {
        qty: 0,
        name: "Server",
        instance_size: AWS.EC2.M1_SMALL,
        os: OS.LINUX,
        region: AWS.REGIONS.US_EAST_1,
        hours_per_month: 0,
        cost: 0.00
      };
    },
    
    initialize: function() {
      this.bind("change:qty", function() { this.calc(); });
      this.bind("change:hours_per_month", function() { this.calc(); });
      this.bind("change:instance_size", function() { this.calc(); });
      this.bind("change:os", function() { this.calc(); });
      this.bind("change:region", function() { this.calc(); });
    },
    
    calc: function() {
      // lookup hourly cost by instance_size and region
      var unit_cost = 0.000;
      
      // schema VENDOR.SERVICE.SIZE.OS.REGION
      if (this.get("os") == OS.LINUX) {
        var tmp = this.get("instance_size").LINUX;
        for (var region in tmp) {
          if (this.get("region").index == tmp[region].index) {
            unit_cost = tmp[region].price;
            break;
          };
        };
      } else if (this.get("os") == OS.WIN) {
        var tmp = this.get("instance_size").WIN;
        for (var region in tmp) {
          if (this.get("region").index == tmp[region].index) {
            unit_cost = tmp[region].price;
            break;
          };
        };
      } else {
        console.log("can't find OS");
      };
      
      // store answer
      this.set({"cost": this.get("qty") * this.get("hours_per_month") * unit_cost});
      
      console.log(this.get("qty") + "x " + this.get("instance_size").name + " " + this.get("os").name + " " + this.get("region").code + "\t " + this.get("hours_per_month") + "\t $" + unit_cost.toFixed(3) + " --> $" + this.get("cost").toFixed(2));
    },
    
    clear: function() {
      console.log("goodbye " + this.get("name"));
      this.destroy();
    }
  });
  //var block = new ComputeBlock();
  //block.set({qty: 100});
  //block.set({instance_size: AWS.EC2.T1_MICRO});
  //block.set({hours_per_month: 1000});
  //block.set({region: AWS.REGIONS.AP_SOUTHEAST_1});
  //block.clear();

  // VIEWS!
  var BlockView = Backbone.View.extend({
    //tagName: "div",
    //classname: "row",
    template: _.template($('#block-template').html()),
    events: {
      "click button.destroy" : "clear"
    },
    
    initialize: function() {
      //  this.model.bind('destroy', this.remove, this);
      console.log("creating a new block view");
    },
    
    render: function() {
      console.log("rendering a new block view");
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    
    clear: function() {
      this.model.clear();
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $("#kloudcalc-app"),
    events: {
      "click #add-compute-block":  "addBlock"
    },
    initialize: function () {
      this.header = this.$("#header");
      this.main = this.$("#main");
      this.footer = this.$("#footer");
    },
    //showPrompt: function () {
    //  var compute_name = prompt("Name of Compute Block?");
    //  var compute_model = new ComputeBlock({ name: compute_name });
    //  // Add a new friend model to our friend collection
    //  this.inventory.add( compute_model );
    //},
    addBlock: function () {
      console.log("adding a new block");
      var block = new ComputeBlock();
      var view = new BlockView({model: block});
      this.$("#block-list").append(view.render().el);
    }
  });
  var App = new AppView;
  
});