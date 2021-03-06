(function() {
  var app;

  app = angular.module("fireBubbleApp", ['firebase']);

  this.AppCtrl = function($scope, angularFire, angularFireCollection) {
    var canvas, ctx, firebase_ref, printBubble;
    canvas = document.getElementById("main");
    ctx = canvas.getContext("2d");
    firebase_ref = new Firebase('https://25este.firebaseio.com/bubble');
    angularFire(firebase_ref, $scope, "bubble");
    firebase_ref.on('value', function(dataSnapshot) {
      return printBubble();
    });
    printBubble = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc($scope.bubble.x, $scope.bubble.y, 30, 0, 2 * Math.PI);
      return ctx.stroke();
    };
    return $(canvas).mousemove(function(el) {
      firebase_ref.set({
        x: el.offsetX,
        y: el.offsetY
      });
      return printBubble();
    });
  };

}).call(this);

