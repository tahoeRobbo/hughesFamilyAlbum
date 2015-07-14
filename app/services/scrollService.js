var app = angular.module('familyAlbum');

app.service('scrollService', function($firebaseArray){
	this.scrollArray = function(ref, field) {
		var reversedList = [];
		var scrollRef = new Firebase.util.Scroll(ref, field);
		var list = $firebaseArray(scrollRef);
		list.scroll = scrollRef.scroll.next(6);
		console.log(list.scrol + 'list.scroll from service');
		return list;
		//return reversedList;
	};
	
	
});//end scrollService