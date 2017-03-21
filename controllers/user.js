var User = require('../models/user.js');

var UserCtrl = {
    GetUser: function(req, res, next) { // Retrieve all users
        User.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    },
    GetUserById: function(req, res, next) { // Retrieve a specific user
        // Return an error if the userId is not defined in the request params
        if(req.params == null || req.params.userId == null) {
            return next(new Error("User ID must be defined in the request parameters."));
        }
        // Modify user ID to upper case so that search is case insensitive
        User.findOne({userId: req.params.userId.toString().toUpperCase()}, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },
    PostUser: function(req, res, next) { // Create a user if one does not already exist for the given user ID
        // Modify user ID to upper case so that search is case insensitive
        User.find({userId: req.body.userId.toString().toUpperCase()}, function(err, post) {
            // If there are no users found, create a user. Otherwise, return error
            if(!Object.keys(post).length) {
                User.create(req.body, function (err2, post2) {
                    if (err2) return next(err2);
                    res.json(post2);
                });
            } else {
                return next(new Error("User exists!"));
            }
        });
    },
    UpdateUser: function(req, res, next) { // Update a user
        // Return an error if the userId is not defined in the request params
        if(req.params == null || req.params.userId == null) {
            return next(new Error("User ID must be defined in the request parameters."));
        }
        // Ensure that user ID sent in update request is all uppercase
        req.body.userId = req.body.userId.toString().toUpperCase();
        User.findOneAndUpdate({userId: req.params.userId.toString().toUpperCase()}, req.body, function(err, post) {
            if (err) return next(err);
            res.json(post);
        });
    },
    DeleteUser: function(req, res, next) { // Delete a user
        // Return an error if the userId is not defined in the request params
        if(req.params == null || req.params.userId == null) {
            return next(new Error("User ID must be defined in the request parameters."));
        }
        // Modify user ID to upper case so that search is case insensitive
        User.findOneAndRemove({userId: req.params.userId.toString().toUpperCase()}, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    }
};

module.exports = UserCtrl;