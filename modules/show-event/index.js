/**
 * Created by info@lucamele.ch
 */
define([
    'backbone',
    'marionette',
    'underscore',
    'app',
    'text!../../templates/show-event/events.html',
    'text!../../templates/show-event/event.html'
], function (Backbone, Marionette, _, App, tplEvents, tplEvent) {

    "use strict";

    // MODULE
    var Show = App.module('Show');

    /**
     * MODELS ----------------------------
     */

    // is a backbone model: http://backbonejs.org/#Model
    Show.eventModel = Backbone.Model.extend({
        // defaults: {
        //     name: 'blastin event',
        //     date: 'date&time go here in ISO 8601 format',
        //     place: "cork like",
        //     eventDetails: "my event is great because it is in cork, like"
        // }
    });

    // is a backbone collection: http://backbonejs.org/#Collection
    Show.EventsCollection = Backbone.Collection.extend({
        url: 'http://143.239.97.138:8080/ComeON/ws/dealService/getAll',
        model: Show.eventModel
    });

    // is a backbone model: http://backbonejs.org/#Model
    // Show.Hello = Backbone.Model.extend({
    //     defaults: {
    //         message: ''
    //     }
    // });


    /**
     * VIEWS ----------------------------
     */

    // is a marionette item view: http://marionettejs.com/docs/v2.4.3/marionette.itemview.html
    Show.EventView = Marionette.ItemView.extend({
        tagName: 'div',
        className: 'show-event-card',
        template: _.template(tplEvent),
        initialize: function() {
            console.log("Show.EventView", this)
        },
        // templateHelpers: function () {
        //     return {
        //         displayName: function(){
        //             if (this.name === "foo_e"){
        //                 return this.name + ' is the coolest!';
        //             }
        //             return this.name;
        //         }
        //     };
        // }
    });

    // is a marionette composite view: http://marionettejs.com/docs/v2.4.3/marionette.compositeview.html
    Show.EventsView = Marionette.CompositeView.extend({
        template: _.template(tplEvents),
        childViewContainer: '#events',
        initialize: function() {
            console.log("Show.EventsView", this)
        },
    });


    /**
     * CONTROLLER ----------------------------
     */

    // is a marionette controller: http://marionettejs.com/docs/v2.4.3/marionette.controller.html
    Show.Controller = Marionette.Controller.extend({
        /**
         * @author info@lucamele.ch
         *
         * @constructor
         */
        initialize: function() {
            // constructor
            console.log('show-events controller');
        },
        /**
         * @author info@lucamele.ch
         */
        index: function() {
            console.log("index");
            // index stuff
            this.events = new Show.EventsCollection();

            // initialize the composite view. Is not in the dom yet!
            this.eventsView = new Show.EventsView({
                collection: this.events,
                childView: Show.EventView,
                // model: new Show.Hello({
                //     message: 'Welcome to this awesome FOO-BAR app!'
                // })
            });

            // context is the Foo.Controller and listen on foos! how awesome!
            // when the collection has finished to load, proceed
            this.listenTo(this.events, 'sync', function() {
                console.log('The collection has loaded!');
                this._setupLayout();
            });

            // get the data from th server
            this.events.fetch();
            this._setupLayout();
        },

        /**
         * @author info@lucamele.ch
         */
        _setupLayout: function() {

            // render everything to the DOM in the main region as defined in app.js (App.addRegions)
            App.major.show(this.eventsView);
        }
    });

    return Show;
});
