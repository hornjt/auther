app.controller('Login', function($scope, AuthFactory) {

	$scope.login = function() {
		var email = $scope.email;
		var password = $scope.password;
		console.log(email, password);
		AuthFactory.login(email, password)	
	}
});