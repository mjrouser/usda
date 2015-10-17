'use strict';

/**
 * @ngdoc overview
 * @name portalApp
 * @description
 * # usdaApp
 *
 * Main module of the application.
 */
angular
  .module('usdaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.materialize',
    'nemLogging',
    'leaflet-directive',
    'gridshore.c3js.chart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });