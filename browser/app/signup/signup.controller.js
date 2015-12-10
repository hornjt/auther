app.controller('Signup', function($scope, AuthFactory) {

	$scope.signup = function() {
		var email = $scope.email;
		var password = $scope.password;
		console.log(email, password);
		AuthFactory.signup(email, password);
	}
});