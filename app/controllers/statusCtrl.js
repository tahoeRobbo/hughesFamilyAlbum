var app = angular.module('familyAlbum');

app.controller('statusCtrl', function($scope, $location, $firebaseAuth, service) {
	$scope.logout = function() {
		service.logout();
		$location.path('/login');
	}
})