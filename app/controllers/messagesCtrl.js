var app = angular.module('familyAlbum');

app.controller('messagesCtrl', function($scope, service, $firebaseArray, FIREBASE_URL, $rootScope){
	var ref = new Firebase(FIREBASE_URL + 'messages');
	var messages = $firebaseArray(ref);
  $scope.messages = messages;
	$scope.test = 'messages'
	$scope.addMessage = function() {
		messages.$add({
			text : $scope.messageText,
			date : Firebase.ServerValue.TIMESTAMP,
			firstname : $rootScope.currentUser.firstname
		}).then(function() { 
			console.log('AND THEN')
			$scope.messageText=' ';
		})
	} // ADD MESSAGE
	
	
	$scope.removeMessage = function(key) {
		messages.$remove(key);
	}// REMOVE MESSAGE METHOD
	
	
	
}); // messages Controller 