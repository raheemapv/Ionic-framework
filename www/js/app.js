angular.module('todo', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html",
          controller: "AttendeesCtrl"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/home");
})
.controller('TodoCtrl', function($scope) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
 })
.controller('AttendeesCtrl', function($scope) {

  $scope.activity = [];
  $scope.onChangeItem = function(attendee){
    var msg = attendee.firstname + " " + attendee.lastname;
    msg += (!attendee.arrived? ' has arrived, ' : ' just left, ');
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
      if($scope.activity.length > 3) {
        $scope.activity.splice(0, 1);
      }

  };

})



.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})
