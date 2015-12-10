'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('./user.model');

router.param('id', function (req, res, next, id) {
	User.findById(id).exec()
	.then(function (user) {
		if (!user) throw HttpError(404);
		req.requestedUser = user;
		next();
	})
	.then(null, next);
});

router.get('/', function (req, res, next) {
	User.find({}).exec()
	.then(function (users) {
		res.json(users);
	})
	.then(null, next);
});

router.post('/', function (req, res, next) {
	console.log("Inside the post route server side")
	User.create(req.body)
	.then(function (user) {
		res.status(201).json(user);
	})
	.then(null, next);
});

router.post('/login', function (req, res, next) {
	console.log("Inside the post route login side");
	User.findOne({"email": req.body.email})
	.then(function(user) {
		if (user) {
			if (user.password === req.body.password) {
				req.session.userId = user._id;
				res.status(200).json(user);
			}
			else {
				res.send("password does not match");
			}
		}
		else {
			res.status(401).json(user);
		}
	})
	.then(null,next);
});

router.get('/auth/me', function(req,res,next){
	User.findOne({ _id: req.session.userId})
		.then(function(user) {
			res.send(user);
		})
		.then(null, next);
})

router.get('/logout', function(req,res,next){
	req.session.destroy();
	res.status(200).send();
})

router.get('/:id', function (req, res, next) {
	req.requestedUser.getStories()
	.then(function (stories) {
		var obj = req.requestedUser.toObject();
		obj.stories = stories;
		res.json(obj);
	})
	.then(null, next);
});

router.put('/:id', function (req, res, next) {
	_.extend(req.requestedUser, req.body);
	req.requestedUser.save()
	.then(function (user) {
		res.json(user);
	})
	.then(null, next);
});

router.delete('/:id', function (req, res, next) {
	req.requestedUser.remove()
	.then(function () {
		res.status(204).end();
	})
	.then(null, next);
});

module.exports = router;