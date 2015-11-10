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



app.controller('formController', function($scope, characterGenerator){
  $scope.submit = function(){
  	characterGenerator.fromInput();
  }  
    
});

app.controller('displayController', ['characterGenerator', '$scope', function(characterGenerator, $scope){
  
  $scope.result = characterGenerator.toDisplay();

}]);





