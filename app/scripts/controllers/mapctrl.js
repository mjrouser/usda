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
        },
        events: {
           map: {
              enable: ['click', 'drag', 'mousemove'],
              logic: 'emit'
           }
        }

        
    });

    $scope.eventDetected = "No events yet...";

    $scope.$on('leafletDirectiveMap.click', function(event){
        $scope.eventDetected = "Click";
        console.log('Click fired!');
    });

    $scope.$on('leafletDirectiveMap.drag', function(event){
        $scope.eventDetected = "Drag";
        console.log('Drag Fired!');
    });

    $scope.$on('leafletDirectiveMap.mousemove', function(event){
        $scope.eventDetected = "MouseMove";
        console.log('Mouse Move Fired!');
    });



    $http.get("scripts/data/us-states.js").success(function(data, status) {

     

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

       function style(feature) {
	            return {
		        weight: 2,
		        opacity: 1,
		        color: 'white',
		        dashArray: '3',
		        fillOpacity: 0.7,
		        fillColor: getColor(feature.properties.density)
	            };
           }


        angular.extend($scope, {
            geojson: {
                data: statesData,
                style: style//,
                //events:  
            }
         });
       }).error(function(){console.log('you done goofed');});



   console.log('hello, is it me youre looking for?');

  });

/*


 var naics_mapping = {111110: "Soybean Farming",
                          111120: "Oilseed (except Soybean) Farming",
                          111130: "Dry Pea and Bean Farming",
                          111140: "Wheat Farming",
                          111150: "Corn Farming",
                          111160: "Rice Farming",
                          111191: "Oilseed and Grain Combination Farming",
                          111199: "All Other Grain Farming",
                          111211: "Potato Farming",
                          111219: "Other Vegetable (except Potato) and Melon Farming",
                          111310: "Orange Groves",
                          111320: "Citrus (except Orange) Groves",
                          111331: "Apple Orchards",
                          111332: "Grape Vineyards",
                          111333: "Strawberry Farming",
                          111334: "Berry (except Strawberry) Farming",
                          111335: "Tree Nut Farming",
                          111336: "Fruit and Tree Nut Combination Farming",
                          111339: "Other Noncitrus Fruit Farming",
                          111411: "Mushroom Production",
                          111419: "Other Food Crops Grown Under Cover",
                          111421: "Nursery and Tree Production",
                          111422: "Floriculture Production",
                          111910: "Tobacco Farming",
                          111920: "Cotton Farming",
                          111930: "Sugarcane Farming",
                          111940: "Hay Farming",
                          111991: "Sugar Beet Farming",
                          111992: "Peanut Farming",
                          111998: "All Other Miscellaneous Crop Farming",
                          112111: "Beef Cattle Ranching and Farming",
                          112112: "Cattle Feedlots",
                          112120: "Dairy Cattle and Milk Production",
                          112130: "Dual-Purpose Cattle Ranching and Farming",
                          112210: "Hog and Pig Farming",
                          112310: "Chicken Egg Production",
                          112320: "Broilers and Other Meat Type Chicken Production",
                          112330: "Turkey Production",
                          112340: "Poultry Hatcheries",
                          112390: "Other Poultry Production",
                          112410: "Sheep Farming",
                          112420: "Goat Farming",
                          112511: "Finfish Farming and Fish Hatcheries",
                          112512: "Shellfish Farming",
                          112519: "Other Aquaculture",
                          112910: "Apiculture",
                          112920: "Horses and Other Equine Production",
                          112930: "Fur-Bearing Animal and Rabbit Production",
                          112990: "All Other Animal Production",
                          113110: "Timber Tract Operations",
                          113210: "Forest Nurseries and Gathering of Forest Products",
                          113310: "Logging",
                          114111: "Finfish Fishing",
                          114112: "Shellfish Fishing",
                          114119: "Other Marine Fishing",
                          114210: "Hunting and Trapping",
                          115111: "Cotton Ginning",
                          115112: "Soil Preparation, Planting, and Cultivating",
                          115113: "Crop Harvesting, Primarily by Machine",
                          115114: "Postharvest Crop Activities (except Cotton Ginning)",
                          115115: "Farm Labor Contractors and Crew Leaders",
                          115116: "Farm Management Services",
                          115210: "Support Activities for Animal Production",
                          115310: "Support Activities for Forestry"
                        }
       
       $scope.naics_mapping = naics_mapping;

       console.log(naics_mapping);



*/






















