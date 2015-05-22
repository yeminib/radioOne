define([
  'backbone',
  'marionette',
  'templates'
  ], function(Backbone, Marionette, templates){
    return Backbone.Marionette.LayoutView.extend({
      template: templates.hello,
      tagName: 'div',

      initialize : function () {

      },

      regions: {
        header: "#header"
      },

      ui: {
        row1: "#row_1",
        row2: "#row_2"
      },

      onBeforeShow : function () {
        console.log("hello before show");
      },

      onShow : function () {
        console.log("hello from show");
      }

    });
  });
