requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.

});

// Start the main app logic.
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,        canvas,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});



define(function (require) {
var strava = require('strava-v3');
	strava.athlete.get({id:3025424},function(err,payload,limits) {
    if(!err) {
        console.log(payload);
    }
    else {
        console.log(err);
    }
});


});


	
