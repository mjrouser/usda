'use strict';

/**
 * @ngdoc function
 * @name usdaApp.controller:MapCtrl
 * @description
 * # MainCtrl
 * Controller of the usdaApp
 */
angular.module('usdaApp')
  .controller('MapCtrl', function ($scope, $http) {

/*
    $scope.getColor  = function (d) {
        return d > 1000 ? '#800026' :
	       d > 500  ? '#BD0026' :
	       d > 200  ? '#E31A1C' :
	       d > 100  ? '#FC4E2A' :
	       d > 50   ? '#FD8D3C' :
	       d > 20   ? '#FEB24C' :
	       d > 10   ? '#FED976' :
	                    '#FFEDA0';
    };


    
   var d = statesData.feature.properties.density;
*/
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false,
            maxZoom: 18,
            minZoom: 4,
            tileLayer: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ',
            tileLayerOptions: {
               attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		  id: 'mapbox.light',
		  detectRetina: true,
		  reuseTiles: true
            },
        },
        usa: {
           lat: 37.8,
           lng: -96,
           zoom: 4
        }
    });



    $http.get("scripts/data/us-states.js").success(function(data, status) {

      

       /*
        angular.forEach(statesData.features[i].properties.density, function(value, key){
	       console.log(value); 
        });
        
       */

        var d =[];
        for(var i=0; i<statesData.features.length; i++){
        	 d.push( statesData.features[i].properties.density);
        }
        
        console.log(d);

       

       function getColor(d) {
        	return d > 1000 ? '#800026' :
	              d > 500  ? '#BD0026' :
	              d > 200  ? '#E31A1C' :
	              d > 100  ? '#FC4E2A' :
	              d > 50   ? '#FD8D3C' :
	              d > 20   ? '#FEB24C' :
	              d > 10   ? '#FED976' :
	                           '#FFEDA0';
}


        angular.extend($scope, {
            geojson: {
                data: statesData,
                style: function style(feature) {
	            return {
		        weight: 2,
		        opacity: 1,
		        color: 'white',
		        dashArray: '3',
		        fillOpacity: 0.7,
		        fillColor: getColor(feature.properties.density)
	            };
                 }
            }
         });
       }).error(function(){console.log('you done goofed');});



   console.log('hello, is it me youre looking for?');

  });





























