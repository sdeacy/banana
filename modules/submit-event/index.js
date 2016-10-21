/**
 * Created by info@lucamele.ch
 */
define([
    'backbone',
    'marionette',
    'underscore',
    'app',
    'text!../../templates/submit-event/index.html'
], function (Backbone, Marionette, _, App, tplSubmit) {

    "use strict";

    // MODULE
    var Submit = App.module('Submit');

    /**
     * MODELS ----------------------------
     */

    // is a backbone model: http://backbonejs.org/#Model
    Submit.Foo = Backbone.Model.extend({
        defaults: {
            name: '',
            somevalue: 'hello to you'
        }
    });


    /**
     * VIEWS ----------------------------
     */

    // is a marionette item view: http://marionettejs.com/docs/v2.4.3/marionette.itemview.html
    Submit.View = Marionette.ItemView.extend({
        template: _.template(tplSubmit),
        tagName : 'div',
        className : 'loginView',
        initialize: function(){
            if(!$('#region-main-area').hasClass('login')) $('#region-main-area').addClass('login');
        }
    });



    /**
     * CONTROLLER ----------------------------
     */

    // is a marionette controller: http://marionettejs.com/docs/v2.4.3/marionette.controller.html
    Submit.Controller = Marionette.Controller.extend({
        /**
         * @author info@lucamele.ch
         *
         * @constructor
         */
        initialize: function() {
            // constructor
            console.log('Submit');
        },
        /**
         * @author info@lucamele.ch
         */


         index: function() {
             // index stuff
             // initialize the item view. Is not in the dom yet!
             this.view = new Submit.View({
                 model: new Submit.Foo({
                     message: 'Hello everyone'
                 })
             });

             this._setupLayout();
         },

        /**
         * @author info@lucamele.ch
         */
        _setupLayout: function() {

            // render everything to the DOM in the main region as defined in app.js (App.addRegions)
            App.major.show(this.view);
        }
    });

    return Submit;
});
