# copyright (c) 2012 by Ben Dang <me@bdang.it>

# Module: dropdown.coffee
# Description:

# MODELS
class app.Label extends Backbone.Model
    defaults:
        id: 0
        name: 'not specified'
        value: 'not specified'
        selected: 0

# COLLECTIONS
class app.Labels extends Backbone.Collection
    model: app.Label

# VIEWS
class app.LabelView extends Backbone.View
    tagName: 'li'

    template: _.template '<a href="javascript:;"><%= name %></a>'

    events:
       'click a': 'selected'

    render: =>
        $(@el).html @template @model.toJSON()
        @

    close: ->
        $(@el).off()

    selected: ->
        if @model.get('selected') is 0
            @model.set {selected: 1}

class app.DropdownView extends Backbone.View
    tagName: 'div'
    className: 'btn-group'

    template: _.template [
        '<a class="btn dropdown-toggle <%= btnClassName %>" ',
            'data-toggle="dropdown" href="javascript:;">',
            '<span id="selected"></span> ',
            '<span class="caret"></span>',
        '</a>',
        '<ul class="dropdown-menu"></ul>'
        ].join ''

    initialize: (options) ->
        # prep labels
        @labelViews = []
        @labels ?= @options.labels
        @selectedLabel = { name: '', value: '' }

        # establish the first selected label
        if @labels.where({selected: 1}).length is 0
            @labels.first().set {selected: 1}

        # extract button class
        @btnClassName ?= @options.btnClassName

        # re-render on changed selected attr
        @labels.on 'change:selected',  @updateSelected, @

    render: =>
        # create the container
        $(@el).html @template {
                btnId: @id
                btnClassName: @btnClassName
            }

        @selectedEl = @$ 'span#selected'
        @selectionEl = @$ 'ul.dropdown-menu'

        @updateSelected()
        @addLabels()
        
        @

    updateSelected: ->
        # find the selected label
        labelRef = @labels.where {selected: 1}

        if labelRef.length is 1
            # found a label
            @selectedLabel.name = labelRef[0].get "name"
            @selectedLabel.value = labelRef[0].get "value"
            if @selectedLabel.value is "not specified"
                @selectedLabel.value = @selectedLabel.name

            @selectedEl.text @selectedLabel.name
            # 20120828 deprecated in next go around 
            @selectedEl.data "value", @selectedLabel.value

            labelRef[0].set {selected: 0}

    addLabels: ->
        @labels.each @addLabel

    addLabel: (label) =>
        view = new app.LabelView {
            model: label
        }
        @selectionEl.append view.render().el
        @labelViews.push view

    close: ->
        for index in [1..@labelViews.length]
            view = @labelViews.pop()
            view.close()

        @labels.off()
        $(@el).remove()

