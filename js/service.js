var app = angular.module('sesameStreetBingo');

app.factory('characterGenerator', function (){
	var ranNum = 0;
	return {
		fromInput: function(){
			ranNum = Math.floor(Math.random() * 6) + 1;
			console.log(ranNum);
		},
		toDisplay: function(){

			if (ranNum === 1){
				return "img/elmo.jpeg";
			} 
			if (ranNum === 2){
				return "img/abby.jpeg";
			} 
			if (ranNum === 3){
				return "img/cookie.jpeg";
			} 
			if (ranNum === 4){
				return "img/zoe.jpeg";
			} 
			if (ranNum === 5){
				return "img/ernie.jpeg";
			}
			if (ranNum === 6){
				return "img/bigBird.jpeg";
			} 
		},
		
	}
		
});
