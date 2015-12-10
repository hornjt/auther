app.controller('Signup', function($scope, AuthFactory) {

	$scope.signup = function() {
		var email = $scope.email;
		var password = $scope.password;
		console.log(email, password);
		var person = {
			email: email,
			password: password,
			isAdmin: $scope.checkboxModel.value
		};
		AuthFactory.signup(person);
	}

	$scope.checkboxModel = {
		value: false
	};
});