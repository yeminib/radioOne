define([
  'backbone',
  'marionette',
  'views/HelloHeader',
  'views/JobCount',
  'models/JobCount',
  'templates'
  ], function(Backbone, Marionette, vHeader, vJobCount, mJobCount, templates){
    return Backbone.Marionette.LayoutView.extend({
      template: templates.hello,
      tagName: 'div',

      initialize : function () {

      },

      regions: {
        header: "#header",
        jobCount: "#jobCount"
      },

      ui: {
        row1: "#row_1",
        row2: "#row_2"
      },

      onBeforeShow : function () {
        // console.log("hello before show");
        this.header.show(new vHeader({title: "Welcome to Hello World!!"}));


        this.jobCount.show(new vJobCount({type: 'jobCount', template: templates.jobCount, model: new mJobCount()}));
      },

      onShow : function () {
        console.log("hello from show");
      }

    });
  });
