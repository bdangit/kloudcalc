###
 * Kloud Calc
 * copyright (c) 2012 by Ben Dang <me@bdang.it>
 * all rights reserved
###

window.app = {}

$ ->
    # MODELS
    class app.ComputeBlock extends Backbone.Model 
        defaults:
            cost: 0.00
            qty: 1
            name: "Server Name"
            hoursPerMonth: 730
            vendorService: null
            region: 1
            size: null
            os: null
            outgoing: 0
        
        initialize: ->
            @on 'change:qty', @updateCost, @
            @on 'change:hoursPerMonth', @updateCost, @
            @on 'change:vendorService', @updateCost, @
            @on 'change:region', @updateCost, @
            @on 'change:size', @updateCost, @
            @on 'change:os', @updateCost, @
            @on 'change:outgoing', @updateCost, @

        updateCost: ->
            # attr = @changedAttributes()
            # console.log "model #{@cid} #{_.keys(attr)[0]} #{_.values(attr)[0]}"

            # console.log _.values @get('vendorService') 
            # set a flag to make sure the values are not null before processing
            if not _.isNull(_.find(@attributes, (_value) -> _value == null))
                # extract unit costs according to os
                unitCosts = _.chain(@get("size")).pick(@get("os")).values(@get("os")).value()[0]
                unitCost = unitCosts[@get("region") - 1]
    
                # calculate cost
                @set cost: unitCost * @get("qty") * @get("hoursPerMonth")
                @get("cost")
            
    class app.StorageBlock extends Backbone.Model
        defaults:
            cost: 0.00
            qty: 1
            name: "Storage Name"
            size: 500 # GB
            vendorService: "AWS.S3"
            region: "us-east-1"
            inputOutput: 10
            outgoing: 10
            
        initialize: ->
            @on 'change:qty', @updateCost, @
            @on 'change:size', @updateCost, @
            @on 'change:vendorService', @updateCost, @
            @on 'change:region', @updateCost, @
            @on 'change:inputOutput', @updateCost, @
            @on 'change:outgoing', @updateCost, @

        updateCost: ->
            attr = @changedAttributes()
            console.log "model #{@cid} #{_.keys(attr)[0]} #{_.values(attr)[0]}"
            
    # COLLECTIONS
    class app.BlockList extends Backbone.Collection
             
    # VIEWS
    class app.OptionsView extends Backbone.View
        tagName: 'div'
        className: 'btn-toolbar'

        events:
            'click div#vendor-service ul a': 'changeOptions'

        initialize: (options) ->
            @categoryView = ''
            @optionViews = []
            @optionGroups = options.dropdowns

            # create category labels from dropdown groups
            @categories = new app.Labels
            @optionGroups.each (_category) =>
                @categories.add {
                    id: _category.get 'id'
                    name: _category.get 'name'
                }

            # set the dropdown group to display (first one) 
            @selectedOptions = @optionGroups.first().get 'dropdowns'

        render: =>
            # create container
            $(@el).append '<span id="category"></span>'
            $(@el).append '<span id="options"></span>'

            @categoryEl = @$ 'span#category'
            @optionEl = @$ 'span#options'

            @renderCategory()
            @renderOptions()
            
            @

        renderCategory: ->
            view = new app.DropdownView {
                id: 'vendor-service'
                btnClassName: 'btn-info btn-mini'
                labels: @categories
            }
            @categoryEl.append view.render().el
            @categoryEl.append " "
            @categoryView = view 

        renderOptions: ->
            @selectedOptions.each @renderOption
        
        renderOption: (dropdown) =>
            view = new app.DropdownView {
                id: dropdown.id
                btnClassName: dropdown.get 'btnClassName'
                labels: dropdown.get 'labels'
            }
            @optionEl.append view.render().el
            @optionEl.append " "
            @optionViews.push view

        changeOptions: ->
            @delOptions()

            # grab selected category ### HERE
            @selectedOptions = @optionGroups.where({
                name: @categoryView.selectedLabel[0]
            })[0].get 'dropdowns'

            @renderOptions()

        delOptions: ->
            for index in [1..@optionViews.length]
                view = @optionViews.pop()
                view.close()

        close: ->
            @delOptions()
            @off()
            @remove()

    class app.BlockOptionsView extends Backbone.View
        tagName: 'div'
        className: 'row'

        template: _.template '<div class="span20" style="margin-top: 5px;"></div>'

        initialize: ->
            @optionsView = null
            @dropdownGroups = @collection

        render: =>
            $(@el).append @template

            view = new app.OptionsView {
                dropdowns: @dropdownGroups
            }
            @$('.span20').append view.render().el
            @optionsView = view
            @

        close: ->
            @optionsView.close()
            @off()
            @remove()        

    # BLOCKVIEWS
    class app.ComputeBlockView extends Backbone.View
        tagName: 'div'
        className: 'row'
        attributes: { style: 'margin-top: 0px'}

        events:
            "click button.destroy": "close"
            "keyup #qty": "setQty"
            "keyup #name": "setName"
            "keyup #hours-per-month": "setHoursPerMonth"
            "click #vendor-service a": "setVendorService"
            "click #region a": "setRegion"
            "click #instance-size a": "setInstanceSize"
            "click #os a": "setOS"
            "click #outgoing a": "setOutgoing"

        template: _.template [
            '<div id="inner" class="span20">',
                '<div class="row">',
                    '<div class="span20">',
                        '<h6><small>compute block</small></h6>',
                    '</div>',
                '</div>',
                '<div class="row">',
                    '<div class="span15 form-inline">',
                        '<div class="input-append">',
                            '<input id="qty" class="span1" type="text" ',
                                'style="text-align: right" value="<%= qty %>">',
                                '<span class="add-on">x</span>',
                        '</div> ',
                        '<input id="name" class="span5" type="text" ',
                            'value="<%= name %>"> ',
                        '<div class="input-append">',
                            '<input id="hours-per-month" class="span2"',
                                'type="text" style="text-align: right" ',
                                'value="<%= hoursPerMonth %>" >',
                                '<span class="add-on">hrs</span>',
                        '</div> ',
                    '</div>',
                    '<div class="span5" style="text-align: right;">',
                        '<strong id="cost">$<%= cost %></strong> ',
                            '<small>/ month</small> &nbsp;',
                        '<button class="btn btn-danger destroy">',
                            '<i class="icon-trash icon-white"></i>',
                        '</button>',
                    '</div>',
                '</div>',
            '</div>'
            ].join ''

        initialize: ->
            @optionsView = null
            @dropdownGroups = new Backbone.Collection( [
                {
                    id: 1
                    name: 'AWS.EC2'
                    value: app.AWS.COMPUTE
                    dropdowns: new Backbone.Collection( [
                        {
                            id: 'region'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.AWS.REGIONS
                        },
                        {
                            id: 'instance-size'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.AWS.COMPUTE
                        },
                        {
                            id: 'os'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.COMMON.OS
                        },
                        # {
                        #     id: 'outgoing'
                        #     btnClassName: 'btn-options btn-mini'
                        #     labels: new app.Labels app.COMMON.BANDWIDTH.OUT
                        # }
                    ] )
                },
                {
                    id: 2
                    name: 'Rackspace.Cloud Servers'
                    value: app.RACKSPACE.COMPUTE
                    dropdowns: new Backbone.Collection( [
                        {
                            id: 'region'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.RACKSPACE.REGIONS
                        },
                        {
                            id: 'instance-size'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.RACKSPACE.COMPUTE
                        },
                        {
                            id: 'os'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.COMMON.OS
                        },
                        # {
                        #     id: 'outgoing'
                        #     btnClassName: 'btn-options btn-mini'
                        #     labels: new app.Labels app.COMMON.BANDWIDTH.OUT
                        # }
                    ] )
                },
                {
                    id: 3
                    name: 'Joyent.SmartMachine'
                    value: app.JOYENT.COMPUTE
                    dropdowns: new Backbone.Collection( [
                        {
                            id: 'region'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.JOYENT.REGIONS
                        },
                        {
                            id: 'instance-size'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.JOYENT.COMPUTE
                        },
                        {
                            id: 'os'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.COMMON.OS
                        },
                        # {
                        #     id: 'outgoing'
                        #     btnClassName: 'btn-options btn-mini'
                        #     labels: new app.Labels app.COMMON.BANDWIDTH.OUT
                        # }
                    ] )
                }
            ] )

        render: =>
            $(@el).html @template @model.toJSON()
            
            view = new app.BlockOptionsView {
                collection: @dropdownGroups
            }
            @$('#inner.span20').append view.render().el
            @optionsView = view
            
            @$('#inner.span20').append '<div class="row"><hr></div>'

            @costEl = @$ '#cost'
            @model.on "change:cost", @updateCost, @
            @setModel(true)

            @
        
        setModel: (firstrun = false) ->
            silent = true
            @setInstanceSize(silent)
            @setQty(silent)
            @setName(silent)
            @setHoursPerMonth(silent)
            if firstrun then @setVendorService(silent)
            @setRegion(silent)
            @setOS(silent)
            @setOutgoing(not silent)

        updateCost: ->
            @costEl.text "$#{@model.get('cost').toFixed(2)}"
        
        setQty: (isSilent = false) ->
            value = parseInt @$("#qty").val(), 10
            if value > -1
                @model.set { qty: value, silent: isSilent }

        setName: (isSilent = false) ->
            value = @$("#name").val()
            @model.set { name: value, silent: isSilent }

        setHoursPerMonth: (isSilent = false) ->
            value = parseInt @$("#hours-per-month").val(), 10
            if value > -1
                @model.set { hoursPerMonth: value, silent: isSilent }

        setVendorService: (isSilent = false) ->
            value = @$("#vendor-service #selected").data "value"
            @model.set { vendorService: value, silent: isSilent }
            @setModel()

        setRegion: (isSilent = false) ->
            value = @$("#region #selected").data "value"
            @model.set { region: value, silent: isSilent }

        setInstanceSize: (isSilent = false) ->
            value = @$("#instance-size #selected").data "value"
            @model.set { size: value, silent: isSilent }

        setOS: (isSilent = false) ->
            value = @$("#os #selected").data "value"
            @model.set { os: value, silent: isSilent }

        setOutgoing: (isSilent = false) ->
            value = @$("#outgoing #selected").data "value"
            @model.set { outgoing: value, silent: isSilent }

        close: ->
            @model.destroy()
            @optionsView.close()
            @off()
            @remove()

    class app.StorageBlockView extends Backbone.View
        tagName: 'div'
        className: 'row'
        attributes: { style: 'margin-top: 0px'}

        events:
            "click button.destroy": "close"
            "keyup #qty": "set"
            "keyup #name": "set"
            "keyup #size": "set"
            "click #region a": "setRegion"
            "click #input-output a": "setInputOutput"
            "click #outgoing a": "setOutgoing"

        template: _.template [
            '<div id="inner" class="span20">',
                '<div class="row">',
                    '<div class="span20">',
                        '<h6><small>storage block</small></h6>',
                    '</div>',
                '</div>',
                '<div class="row">',
                    '<div class="span15 form-inline">',
                        '<div class="input-append">',
                            '<input id="qty" class="span1" type="text" ',
                                'style="text-align: right" value="<%= qty %>">',
                                '<span class="add-on">x</span>',
                        '</div> ',
                        '<input id="name" class="span5" type="text" ',
                            'value="<%= name %>"> ',
                        '<div class="input-append">',
                            '<input id="size" class="span2"',
                                'type="text" style="text-align: right" ',
                                'value="<%= size %>" >',
                                '<span class="add-on">GB</span>',
                        '</div> ',
                    '</div>',
                    '<div class="span5" style="text-align: right;">',
                        '<strong id="cost">$<%= cost %></strong> ',
                            '<small>/ month</small> &nbsp;',
                        '<button class="btn btn-danger destroy">',
                            '<i class="icon-trash icon-white"></i>',
                        '</button> ',
                    '</div>',
                '</div>',
            '</div>'
            ].join ''

        initialize: ->
            @optionsView = null
            @dropdownGroups = new Backbone.Collection( [
                {
                    id: 1
                    name: 'AWS.EBS'
                    dropdowns: new Backbone.Collection( [
                        {
                            id: 'region'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.AWS.REGIONS
                        },
                        {
                            id: 'input-output'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.COMMON.IO
                        }
                    ] )
                },
                {
                    id: 2
                    name: 'AWS.S3'
                    dropdowns: new Backbone.Collection( [
                        {
                            id: 'region'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.AWS.REGIONS
                        },
                        {
                            id: 'outgoing'
                            btnClassName: 'btn-options btn-mini'
                            labels: new app.Labels app.COMMON.BANDWIDTH.OUT
                        }
                    ] )
                }
            ] )

        render: =>
            $(@el).html @template @model.toJSON()
            view = new app.BlockOptionsView {
                collection: @dropdownGroups
            }
            @$('#inner.span20').append view.render().el
            @optionsView = view
            @$('#inner.span20').append '<div class="row"><hr></div>'
            @

        set: ->
            console.log "change attribute"

        setRegion: ->
            value = @$("#region #selected").data "value"
            @model.set { region: value }

        setInputOutput: ->
            value = @$("#input-output #selected").data "value"
            @model.set { inputOutput: value }

        setOutgoing: ->
            value = @$("#outgoing #selected").data "value"
            @model.set { outgoing: value }

        close: ->
            @model.destroy()
            @optionsView.close()
            @off()
            @remove()

    # APP
    class app.AppView extends Backbone.View
        events:
            "click #add-compute-block": "addComputeBlock"
            "click #add-storage-block": "addStorageBlock"

        initialize: ->
            # keep track of blocks
            @blockList = new app.BlockList
            @numBlock = 0

            @totalCostEl = @$ "#total-cost"
            @blockListEl = @$ "#block-list"
            @cpanelEl = @$ "#control-panel"

            @blockList.on "change add remove", @updateTotalCost, @

        addBlock: (view) ->
            @blockListEl.append view.render().el
            
        addComputeBlock: ->
            @numBlock++
            @addBlock new app.ComputeBlockView {
                id: "block-#{@numBlock}"
                model: @blockList.push new app.ComputeBlock
            }
            
        addStorageBlock: ->
            @numBlock++
            @addBlock new app.StorageBlockView {
                id: "block-#{@numBlock}"
                model: @blockList.push new app.StorageBlock
            }

        updateTotalCost: ->
            costs = @blockList.pluck "cost"
            totalCost = 0
            for cost in costs
                totalCost += cost
            @totalCostEl.html "$#{totalCost.toFixed(2)} <small>/ month</small>"


    kloudcalcApp = new app.AppView {el: "#kloudcalc-app"}
