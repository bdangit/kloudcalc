$(function() {
  // MODELS!
  var ComputeBlock = Backbone.Model.extend({
    defaults: function() {
      return {
        qty: 1,
        name: "Server",
        instance_size: null, // m1.micro, m1.small, etc.
        region: null,
        hours_per_month: 730,
        cost: 0.00
      };
    },
    
    initialize: function() {
      console.log("created ComputeBlock");
      this.bind("change:qty", function() { this.calc(); });
      this.bind("change:instance_size", function() { this.calc(); });
      this.bind("change:hours_per_month", function() { this.calc(); });
      this.bind("change:region", function() { this.calc(); });
    },
    
    calc: function() {
      console.log("calculating new cost")
      // lookup hourly cost by instance_size and region
      //var unit_cost =
      
      //this.set({"cost": hours_per_month * unit_cost});
    },
    
    clear: function() {
      this.destroy();
    }
  });
  var block = new ComputeBlock();
  block.set({qty: 5});
  block.set({instance_size: "m1.small"});
  block.set({hours_per_month: 1000});
  block.set({region: "US West"});
  
  console.log(block.toJSON());
  
  /*
  var BlockList = Backbone.Collection.extend({
    model: ComputeBlock,
    // collection blocks -- for now reference ComputeBlock
    localStorage: new Store("blocks-backbone"),
    
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },
    
    comparator: function(block) {
      return block.get('order');
    }
    
  });
  var Blocks = new BlockList;
  */
  
  // VIEWS!
  /*
  var BlockView = Backbone.View.extend({
    tagName: "div",
    className: "row",
    template: _.template($('#block-template').html()),
    events: {
      "click a.destroy" : "clear"
    },
    
    //initialize: function() {
    //  this.model.bind('destroy', this.remove, this);
    //},
    
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    
    clear: function() {
      this.model.clear();
    }
  });
  */
  
  var AppView = Backbone.View.extend({
    el: $("#kloudcalc-app"),
    events: {
      "click #add-compute-block":  "addBlock"
    },
    initialize: function () {
      this.header = this.$("#header");
      
      this.main = this.$("#main");
      this.addNewBlock = this.$("#add-compute-block");
      
      this.footer = this.$("#footer");
    },
    //showPrompt: function () {
    //  var compute_name = prompt("Name of Compute Block?");
    //  var compute_model = new ComputeBlock({ name: compute_name });
    //  // Add a new friend model to our friend collection
    //  this.inventory.add( compute_model );
    //},
    addBlock: function (block) {
      console.log("adding a new block");
      //var view = new BlockView({model: block});
      //this.$("#block-list").append(view.render().el);
    }
  });
  var App = new AppView;
  
});