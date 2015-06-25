var app = angular.module('familyAlbum');

app.service('service', function($location, $firebaseAuth, FIREBASE_URL, $routeParams, $firebaseArray, $firebaseObject, $rootScope){
	
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);
	

	
	this.login = function(user){
		return auth.$authWithPassword({
				email: user.email,
				password: user.password
			});
		$location.path('/#/photos');
		}; // LOG IN FUNCTION, GETS PASSED USER INFO THROUGH CTRL
	
	//Register the user, and once registered create the firebaseObj with the full user info (which was input via registrationTmpl.html)
	this.register = function(user) {
		return auth.$createUser({
			email: user.email,
			password: user.password
		}).then(function(regUser) {
			console.log(regUser)
			//regUser.uid.replace('simplelogin', ''); //TRYING TO REMOVE SIMPLELOGIN NOT WORKING
			var userRef = new Firebase(FIREBASE_URL + 'users/' + regUser.uid);
			var firebaseUsers = $firebaseObject(userRef);

//			DONT DO THIS, WILL NOT WORK WITH FIREBASEOBJECT -- INSTEAD HARD ASSIGN TO OBJECT PARAMS AND .$save() -- SEE BELOW
//			var userInfo = {
//				date:  Firebase.ServerValue.TIMESTAMP,
//				regUser: regUser.uid,
//				firstname: user.firstname,
//				lastname: user.lastname,
//				email: user.email,
//			}; // user info
//			
			firebaseUsers.date = Firebase.ServerValue.TIMESTAMP;
			firebaseUsers.regUser = regUser.uid;
			firebaseUsers.firstname = user.firstname,
			firebaseUsers.lastname = user.lastname,
			firebaseUsers.email = user.email,
			
			firebaseUsers.$save()
		});// 'and then' promise
	}// register user with firebase service
	
	
	//$onAuth is a method on the auth object. auth object was created at the top of this page
	//$onAuth listens for auth events, triggers when someone ins/outs
	//After the user is registered and firebaseObj is created and saved, access that object and save it to the $rootScope as the currentUser
	auth.$onAuth(function(authUser) {
		//if onAuth returns something (authUser) then someone must be logging in
		if (authUser) {
			console.log(authUser)
			var onRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
			var userData = $firebaseObject(onRef);
			userData.$loaded().then(function(fullUser) {
					$rootScope.currentUser = fullUser;
					console.log("Logged in as: ", fullUser);
					console.log($rootScope.currentUser);
					console.log(authUser.uid)
			})
		// if onAuth DOES NOT return something, someone is logging out -- reset $rootScope.currentUser to ''.
		} else {
			$rootScope.currentUser = '';
			console.log($rootScope.currentUser + "from $onAuth in service")
		}
	})//onAuth
	
	this.logout = function() {
		return auth.$unauth();
	}
	
})