window.vendors = {}

class vendors.AWS extends Backbone.Model
	calcBandwidth: (incoming, outgoing) ->
		10