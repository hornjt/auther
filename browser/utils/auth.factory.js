app.factory('AuthFactory', function($http){
	return {
		signup: function(email, password) {
			var person = {
				email: email,
				password: password
			};
			$http.post('/api/users', person)
				.then(function(newPerson) {
					console.log("Inside the post .then route", newPerson);
				});
		},
		login: function(email, password) {
			var person = {
				email: email,
				password: password
			};
			$http.post('/api/users/login', person)
				.then(function(newPerson) {
					console.log("Inside the post .then route", newPerson);
				});
		}

	};
});