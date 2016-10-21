/**
 * Created by info@lucamele.ch
 */
define([
    'backbone',
    'marionette',
    'underscore',
    'app',
    'text!../../templates/login/index.html'
], function (Backbone, Marionette, _, App, tplLogin) {

    "use strict";

    // MODULE
    var Login = App.module('Login');

    /**
     * MODELS ----------------------------
     */

    // is a backbone model: http://backbonejs.org/#Model
    Login.Foo = Backbone.Model.extend({
        defaults: {
            name: '',
            somevalue: 'hello to you'
        }
    });


    /**
     * VIEWS ----------------------------
     */

    // is a marionette item view: http://marionettejs.com/docs/v2.4.3/marionette.itemview.html
    Login.View = Marionette.ItemView.extend({
        template: _.template(tplLogin),
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
    Login.Controller = Marionette.Controller.extend({
        /**
         * @author info@lucamele.ch
         *
         * @constructor
         */
        initialize: function() {
            // constructor
            console.log('login');
        },
        /**
         * @author info@lucamele.ch
         */


         index: function() {
             // index stuff
             // initialize the item view. Is not in the dom yet!
             this.view = new Login.View({
                 model: new Login.Foo({
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

    return Login;
});
