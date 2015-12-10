'use strict';

app.controller('StoryListCtrl', function ($scope, stories, Story, users, AuthFactory) {
	$scope.stories = stories;
	$scope.users = users;

	$scope.newStory = new Story();
	$scope.currentUser = AuthFactory.getUser();
	
	$scope.removeStory = function (story) {
		story.destroy()
		.then(function () {
			var idx = $scope.stories.indexOf(story);
			$scope.stories.splice(idx, 1);
		});
	};

	$scope.addStory = function () {
		$scope.newStory.save()
		.then(function (created) {
			created.author = $scope.newStory.author;
			$scope.newStory = new Story();
			$scope.stories.unshift(created);
		});
	};
});

/*{
  "_id": "NyXgzo5RMBg",
  "name": "Ernest Miles",
  "phone": "(831) 375-4749",
  "email": "kasno@ucetivone.io",
  "password": "cor",
  "isAdmin": false,
  "photo": "http://api.randomuser.me/portraits/thumb/men/26.jpg",
  "__v": 0
}*/