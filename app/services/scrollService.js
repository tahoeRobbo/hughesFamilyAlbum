var app = angular.module('familyAlbum');

app.service('scrollService', function($firebaseArray){
	this.picScrollArray = function(ref, field) {
		var reversedList = [];
		var scrollRef = new Firebase.util.Scroll(ref, field);
		var list = $firebaseArray(scrollRef);
		list.scroll = scrollRef.scroll;
		console.log(list.scrol + 'list.scroll from service');
		return list;
		//return reversedList;
	};
	
	
});//end scrollService