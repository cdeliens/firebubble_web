app = angular.module("fireBubbleApp", ['firebase'])

@AppCtrl = ($scope, angularFire) ->
  $scope.bubble = "Hola"

  ref = new Firebase('https://25este.firebaseio.com/bubble');
  angularFire(ref, $scope, 'bubble');
