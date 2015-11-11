var app = angular.module('sesameStreetBingo', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
    templateUrl: 'partials/form.html',
    controller: 'formController'
  });

  $routeProvider.when('/display', {
    templateUrl: 'partials/display.html',
    controller: 'displayController'
  });

});

app.controller('formController', function($scope, characterGenerator, letterGenerator){
  $scope.submit = function(){
    characterGenerator.showFace();
  } 

  $scope.submit = function(){
  	letterGenerator.showLetter();
  }  
    
});

app.controller('displayController', ['characterGenerator', 'letterGenerator', '$scope', '$route', function(characterGenerator, letterGenerator, $scope, $route){
  $scope.reloadRoute = function() {
    $route.reload();
  }

  //  $scope.run = function(){
  //   characterGenerator.showFace();
  // } 

  // $scope.run = function(){
  //   letterGenerator.showLetter();
  // } 
  
  $scope.face = characterGenerator.showFace();

  $scope.letter = letterGenerator.showLetter();



}]);





