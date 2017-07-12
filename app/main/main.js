'use strict';
// import {chartCtrl} from '../controllers/chartCtrl.js';

angular
    .module('chartApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'main/main.html',
            controller : "chartCtrl"
        });
    }]);
