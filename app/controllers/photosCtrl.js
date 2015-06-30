var app = angular.module('familyAlbum');

app.controller('photosCtrl', function($scope, $firebaseObject, FIREBASE_URL, service, $rootScope, $firebaseArray){
	var imgRef = new Firebase(FIREBASE_URL + 'photos/');
	var photos = $firebaseArray(imgRef);
	$scope.photos = photos;
	$scope.preview = false;
/*	$scope.addPhoto = function() {
		photos.title = $scope.photo.filename;
		photos.date = Firebase.ServerValue.TIMESTAMP;
		photos.firstname = $rootScope.currentUser.firstname;
		photos.lastname = $rootScope.currentUser.lastname;
		photos.email = $rootScope.currentUser.email;
		photos.img = $scope.photo.data;
		photos.text = "test text, the function did fire";
		photos.$save();
	}*/
	
/*	$scope.addPhoto = function(photo) {
		console.log(photo)2
		console.log($scope.photo)
		photos.Photo = {
//			title : $scope.photo.filename,
			date : Firebase.ServerValue.TIMESTAMP,
			firstname : $rootScope.currentUser.firstname,
			lastname : $rootScope.currentUser.lastname,
			email : $rootScope.currentUser.email,
//			image : $scope.photo.data,
		}
		
		photos.$save();
	}
	*/
	//DOESNT NOT WORK WITH NG-MODEL / NG-CLICK!!  TRYING TO READ INPUT FILE OUTSIDE OF JS, STORE AS GLOBAL VARIABLE
	/*$scope.previewFile = function() {
		var preview = document.querySelector('img');
		var file = $scope.picInput;
		var reader = new FileReader();
		
		reader.onloadend = function() {
			preview.src = reader.result;
		}
		
		if(file) {
			reader.readDataAsURL(file);
		} else {
			preview.src = '';
		}
	};*/
	
	$scope.togglePreview = function() {
		$scope.preview = !$scope.preview;
	};
	
	$scope.test = "Linked from photosCtrl";
	
	$scope.removePhoto = function(key) {
		photos.$remove(key);
	};
}); // photosCtrl






/*CORRECT WORKING FUNCTION TO CONVERT TO BASE 64 AND DISPLAY PREVIEW*/
/*
var previewFile = function() {
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
	}*/



