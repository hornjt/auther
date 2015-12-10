'use strict';

app.directive('navbar', function ($state, $location, $http, AuthFactory) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.logout = function(){
				$http.get('/api/users/logout')
				.then(function(){
					console.log("we logged out yo");
				})
			};
			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};
		}
	}
});