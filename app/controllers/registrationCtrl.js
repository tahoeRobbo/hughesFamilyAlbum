var app = angular.module('familyAlbum');

app.controller('RegistrationCtrl', function($scope, service, FIREBASE_URL, $firebaseAuth, $location){
	
	/*var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);*/
	
	
	$scope.login = function() {
		service.login($scope.user)
		.then(function(user){
			$location.path('/messages');
		}).catch(function(error) {
			$scope.message = error.message;
		})
		
	} // login Ctrl
	
	$scope.register = function() {
		service.register($scope.user)
		.then(function(user) {
			service.login($scope.user)
			$location.path('/messages');
		}).catch(function(error) {
			$scope.message = error.message;
		})
	} // Register Ctrl
	
	$scope.logout = function(){
		service.logout;
	};
});