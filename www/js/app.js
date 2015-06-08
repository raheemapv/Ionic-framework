angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  /**/
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  $scope.onItemDelete = function(item){
    $scope.items.splice($scope.items.indexOf(item),1)
  }
  $scope.moveItem= function(item, fromIndex, toIndex){
    /*$scope.items.splice(fromIndex,1);
    $scope.items.splice(toIndex,0,item);*/
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  }
 });

