var app = angular.module('sesameStreetBingo');

app.factory('characterGenerator', function (){
	var faceImg = ["img/elmo.jpeg", 
				   "img/abby.jpeg", 
				   "img/cookie.jpeg", 
				   "img/zoe.jpeg",
				   "img/ernie.jpeg",
				   "img/bigBird.jpeg"];

	return {
		showFace: function(){
			return faceImg[Math.floor(Math.random() * 6)];
		} 
	}
		
});

app.factory('letterGenerator', function(){
  var BINGO = ["img/redB.gif",
            "img/orangeI.jpg",
            "img/blueN.jpg",
            "img/yellowG.jpg",
            "img/greenO.jpeg"];

    return {
      showLetter: function(){
        return BINGO[Math.floor(Math.random()*5)];
      }
    }
});




