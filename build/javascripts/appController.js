(function() {
  var app;

  app = angular.module("fireBubbleApp", ['firebase']);

  this.AppCtrl = function($scope, angularFire, angularFireCollection) {
    var el, printBubble, ref, ref_bubble, two;
    el = document.getElementById("main");
    two = new Two({
      width: 320,
      height: 470
    });
    two.appendTo(el);
    ref = new Firebase('https://25este.firebaseio.com/');
    ref_bubble = new Firebase('https://25este.firebaseio.com/bubble');
    $scope.bubble;
    angularFire(ref_bubble, $scope, "bubble");
    printBubble = function() {
      var circle;
      circle = two.makeCircle($scope.bubble.x, $scope.bubble.y, 25);
      circle.fill = "#FF8000";
      circle.opacity = 0.20;
      circle.stroke = 'orangered';
      return circle.linewidth = 5;
    };
    return two.bind("update", function(frameCount) {
      two.clear();
      return printBubble();
    }).play();
  };

}).call(this);
