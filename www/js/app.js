angular.module('todo', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      cache: false,
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
/*.controller('TodoCtrl', function($scope) {

 })*/