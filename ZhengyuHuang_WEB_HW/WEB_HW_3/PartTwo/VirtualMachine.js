var machineApp = angular.module('virtualMachine', []);

machineApp.controller('machineListCtrl', function ($scope, $http) {
  $http.get('http://50.116.7.241:3000/api').success(function(data) {
    $scope.machines = data.api;
    var size = $scope.machines.length;
    $scope.URLArray = [];
    $scope.IDArray = [];
    for(var i = 0; i < size; i++){
      $scope.IDArray.push($scope.machines[i].id);
      $scope.URLArray.push('http://50.116.7.241:3000/api/' + $scope.machines[i].id);
    }
    console.log($scope.IDArray);
    console.log($scope.URLArray);
    $scope.minUsg = 99;
    $scope.maxUsg = 0;
    $scope.curUsg = 50;
  });

  $scope.getCPUUsage = function(idx) {
    setInterval(
      function(){
        $http.get($scope.URLArray[idx]).success(function(cpuUsg) {
          var curDom = document.getElementById($scope.IDArray[idx]);
          curDom.getElementsByClassName('curUsg')[0].innerHTML = cpuUsg;
          if(curDom.getElementsByClassName('minUsg')[0].innerHTML > cpuUsg){
            curDom.getElementsByClassName('minUsg')[0].innerHTML = cpuUsg;
          }
          if(curDom.getElementsByClassName('maxUsg')[0].innerHTML < cpuUsg){
            curDom.getElementsByClassName('maxUsg')[0].innerHTML = cpuUsg;
          }
        }
      )}, 1000);
  };

  $scope.begin = function(){
    for(var i = 0; i < $scope.machines.length; i++){
      if(document.getElementById($scope.IDArray[i]) !== null){
        $scope.getCPUUsage(i);
      }
    }
  }

});