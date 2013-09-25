app = angular.module("fireBubbleApp", ['firebase'])
@AppCtrl = ($scope, angularFire, angularFireCollection) ->
  el = document.getElementById("main")
  two = new Two(width: 320, height: 470)
  two.appendTo el

  ref = new Firebase('https://25este.firebaseio.com/')
  ref_bubble = new Firebase('https://25este.firebaseio.com/bubble')
  $scope.bubble
  
  angularFire(ref_bubble, $scope, "bubble")

  printBubble = () ->
    circle = two.makeCircle($scope.bubble.x, $scope.bubble.y, 25)
    circle.fill = "#FF8000"
    circle.opacity = 0.20
    circle.stroke = 'orangered'
    circle.linewidth = 5


  two.bind("update", (frameCount) -> # Finally, start the animati
    two.clear()
    printBubble()
  ).play()
