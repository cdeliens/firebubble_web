(function() {
  var app;

  app = angular.module("fireBubbleApp", ['firebase']);

  this.AppCtrl = function($scope, angularFire, angularFireCollection) {
    var canvas, ctx, printBubble, ref_bubble;
    canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
    ref_bubble = new Firebase('https://25este.firebaseio.com/bubble');
    angularFire(ref_bubble, $scope, "bubble");
    printBubble = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc($scope.bubble.x, $scope.bubble.y, 30, 0, 2 * Math.PI);
      return ctx.stroke();
    };
    return setInterval(function() {
      printBubble();
      return 6000;
    });
  };

}).call(this);
