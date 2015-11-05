var VMReaderApp= angular.module('VMReaderApp', []);

VMReaderApp.controller('readerCtrl', function($scope, $http){
  $http.get("http://50.116.7.241:3000/api").success(function(response){
    $scope.names = response.api;
  });

  $http.get("http://50.116.7.241:3000/api"+"/"+"$scopes.names.id").success(function(response2){
    $scope.usage = response2;
    console.log(response2);
  });

});
