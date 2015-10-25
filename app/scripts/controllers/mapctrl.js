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
        angular.extend($scope, {
            geojson: {
                data: statesData,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    });



   console.log('hello, is it me youre looking for?');

  });




























