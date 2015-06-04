angular.module('todo', ['ionic'])
.controller('TodoCtrl', function($scope, $ionicModal) {

  $scope.items =[]

   $ionicModal.fromTemplateUrl('new-task.html', {
     scope: $scope,
     animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal
   })  

   $scope.openModal = function() {
     $scope.modal.show();
   }

   $scope.closeModal = function() {
     $scope.modal.hide();
   };

   $scope.$on('$destroy', function() {
     $scope.modal.remove();
   });

   //function to add items to the existing list
   $scope.AddItem = function (data) {
     $scope.items.push({
       task: data.newItem,
       status: 'not done'
     });
     data.newItem = '';
     $scope.closeModal();
   };

 })