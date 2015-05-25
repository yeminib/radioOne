define([
  'backbone',
  'marionette',
  'templates'
  ], function(Backbone, Marionette, templates){
    return Marionette.ItemView.extend({
      template: templates.header,
      tagName: 'div',

      onBeforeRender: function(){
        var t = this.options.title;
        this.model = new Backbone.Model({title: t});
        // this.render();
      }
    });
  });
