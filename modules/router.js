/**
 * Created by info@lucamele.ch
 */

define(['app', 'marionette'], function (App, Marionette) {
    var Router = App.module('Router');

    "use strict";

    Router.Controller = Marionette.Controller.extend({

        /**
         * @author info@lucamele.ch
         */
        foo: function(){
            var foo = new App.Foo.Controller();
            foo.index();
        },

        /**
         * @author info@lucamele.ch
         */

        bar: function(){
            var bar = new App.Bar.Controller();
            bar.index();
        },

        login: function(){
            console.log("Router.Controller login")
            var login = new App.Login.Controller();
            login.index();
        },
        submit: function(){
            console.log("Router.Controller login")
            var submit = new App.Submit.Controller();
            submit.index();
        }
    });

    return Router;
});