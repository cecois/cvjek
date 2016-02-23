var ContentsCVView = Backbone.View.extend({
    el: $("#cv-container"),
    template: Handlebars.templates['contentsCVViewTpl'],
    events: {},
    initialize: function(options) {

this.options = options;
// this.el=$("#"+this.options.cf+"-container");

        // this.render()
        // this.listenTo(this.collection, 'sync', this.render)
        this.listenTo(this.collection, 'change', this.render)
        return this
    },
        activate:function(slug){
// a proxy activator: helps decide in which actual collection the slug will activate a model

// because jekyll dashes its slugs, we know the first index is the cateogry
// var a = slug.split("-")[0]

// if(a=="about"){
//     appContentsAbout.activate(slug)
// }

return this

    },
    render: function() {

$(this.el).html(this.template({
            count: this.collection.models.length,
            rows: this.collection.toJSON()
}));
        // return this
    // return this.render_error()
return this
    },
    render_error: function() {

$(this.el).html("this view errored out");

        return this
    }
});