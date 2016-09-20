(function () {
'use strict';

var msg1 = "Enjoy!";
var msg2 = "Too much!";
var msg3 = "Please enter data first";

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.food = ""
  $scope.message = "";
  $scope.msgColor = "red";
  $scope.checkLunch = function(){
    var msg = checkFood($scope.food);
    $scope.message = msg;
  }

  function checkFood(string){
    console.log(string);
    if(!string || string.trim().length === 0){
      $scope.msgColor = "red";
      return msg3;
    }
    var foods= string.split(',');
    var count = 0;
    for(var i=0;i<foods.length;i++){
      var s = foods[i];
      if(s && s.trim().length > 0){
        count++;
      }
    }
    if(count == 0){
      $scope.msgColor = "red";
      return msg3;
    }
    $scope.msgColor = "green";
    if(count > 3){
      return msg2;
    }
    return msg1;
  }
}

})();
