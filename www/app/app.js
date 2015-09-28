(function() {

    function configureStates($stateProvider, $urlRouterProvider) {
        var messageListState = {
            url: '/list',
            templateUrl: 'app/message-list/message-list.tpl.html',
            controller: 'messageListCtrl',
            controllerAs: 'vm'
        };
        $stateProvider.state('list', messageListState);

        var messageDetailsState = {
            url: '/details/:id',
            resolve: {
                message: ['$stateParams', 'messageService', function ($stateParams, messageService) {
                    return messageService.getMessage(parseInt($stateParams.id));
                }]  
            },
            templateUrl: 'app/message-details/message-details.tpl.html',
            controller: 'messageDetailsCtrl',
            controllerAs: 'vm'
        };
        $stateProvider.state('details', messageDetailsState);
        
        var deviceDetailsState = {
            url: '/deviceDetails',
            templateUrl: 'app/device-details/device-details.tpl.html',
            controller: 'deviceDetailsCtrl',
            controllerAs: 'vm'
        };
        $stateProvider.state('deviceDetails', deviceDetailsState);

        $urlRouterProvider.otherwise('/list');
    }

    function config($mdThemingProvider, $compileProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('orange');

        $compileProvider.imgSrcSanitizationWhitelist('img/');
    }

    var app = angular.module('nfcApp', ['ui.router', 'ngMaterial', 'angularMoment']);
    app.config(['$stateProvider', '$urlRouterProvider', configureStates]);
    app.config(['$mdThemingProvider', '$compileProvider', config]);

}());