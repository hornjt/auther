'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, AuthFactory) {
	$scope.story = story;
	$scope.users = users;
	$scope.$watch('story', function () {
		$scope.story.save();
	}, true);
	$scope.isAdmin = function() {
		var bool =  AuthFactory.getUser().isAdmin;
		console.log(bool);
		return bool;
	}
	console.log($scope.currentUser);
	$scope.currentUser = AuthFactory.getUser();
});