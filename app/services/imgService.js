/*
var app = angular.module('familyAlbum');

app.service('imgService', function(FIREBASE_URL, $firebaseObject, $rootScope){
	
	
		//COMMENTING OUT FOR NOW GOING TO GET IT WORKING IN THE CTRL
	this.previewFile = function() {
		var preview = document.querySelector('img');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		
		reader.onloadend = function() {
			preview.src = reader.result
		}
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = '';
		}
	}
	
	this.upload = function(file) {
		
	}
	
	
	
})
*/


/*//MOVING OVER TO CTRL __ COMMENTING OUT FOR NOW
var uploadFile = function() {
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
/*	var FIREBASE_URL = "https://familyalbum.firebaseio.com/"
	var imgRef = new Firebase('https://familyalbum.firebaseio.com/photos/');
	var imgObj = $firebaseObject(imgRef);
	
	if(file) {
		reader.readAsDataURL(file);
		imgObj.set(reader.result)
	}
}*/





	




















/*
//CORRECT WORKING FUNCTION TO CONVERT TO BASE 64 AND DISPLAY PREVIEW
var readFile;
var previewFile = function() {
		var preview = document.querySelector('img');
		var file = document.querySelector('input[type=file]').files[0];
		var reader = new FileReader();
		
		reader.onloadend = function() {
			preview.src = reader.result
		}
		if (file) {
			readFile = reader.readAsDataURL(file);
		} else {
			preview.src = '';
		}
	}*/

