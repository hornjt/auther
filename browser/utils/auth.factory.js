app.factory('AuthFactory', function($http){
	var currentUser;

	return {
		signup: function(person) {
			$http.post('/api/users', person)
				.then(function(newPerson) {
					console.log(newPerson);
					currentUser = newPerson.data;
					console.log("Inside the signup .then route", currentUser);
				});
		},
		login: function(email, password) {
			var person = {
				email: email,
				password: password
			};
			$http.post('/api/users/login', person)
				.then(function(newPerson) {
					currentUser = newPerson.data;
					console.log("Inside the login .then route", currentUser);
				});
		},
		getUser: function() {
			console.log(currentUser);
			return currentUser;
		}
		isAdmin: function() {
			return currentUser.isAdmin;
		}
	};
});