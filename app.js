var app = angular.module('familyAlbum', ['ngRoute', 'firebase', 'ngFileUpload']);

app.constant('FIREBASE_URL', 'https://familyalbum.firebaseio.com/');



app.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl : 'app/views/loginTmpl.html',
		controller : 'RegistrationCtrl'
	})
	.when('/register', {
		templateUrl : 'app/views/registerTmpl.html',
		controller : 'RegistrationCtrl'
	})
	.when('/messages', {
		templateUrl : 'app/views/messagesTmpl.html',
		controller : 'messagesCtrl'
	})
	.when('/photos', {
		templateUrl : 'app/views/photosTmpl.html',
		controller : 'photosCtrl'
	})
	.otherwise('/photos')
})

