define([
  'backbone',
  'marionette',
  'templates'
  ], function(Backbone, Marionette, templates){
    return Marionette.ItemView.extend({
      tagName: 'div',

      firstRun: true,

      initialize : function () {
        console.log(this.model);
        this.listenTo(this.model, 'successOnFetch', this.successHandler);
        this.listenTo(this.model, 'errorOnFetch', this.failHandler);
        // this.model.on('change', this.fire());
      },

      fire : function () {
        console.log("fire");
        this.render();
      },

      onRender : function () {

      },

      onBeforeRender: function(){
        // var t = this.options.title;
        // this.model = new Backbone.Model({title: t});

        console.log("testtt");
        // this.getData();

        if(this['firstRun'] == true){
          this.getData();
          this['firstRun'] = false;
        }

      },

      getData : function () {
        this.model.fetch({
          success : function (model, response, options) {
            console.log("data fetch sucessfull: ");
            model.trigger('successOnFetch');

          },
          error : function (model, response, options) {
            console.log("data fetch failed");
            // this.getData();
          }
        })
      },

      successHandler : function () {
        this.render();
      },

      failHandler : function () {
        this.getData();
      }
    });
  });
