/*global require:true */
require(['app'], function(App) {

    'use strict';

    require(
        [
            'modules/router'

            // all modules have to be loaded here
            ,'modules/foo/index'
            ,'modules/bar/index'
            ,'modules/login/index'
            ,'modules/submit-event/index'
            ,'modules/show-event/index'

        ], function() {
            App.start();
        });
});