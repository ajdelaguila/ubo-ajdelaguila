var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our user model for our unit testing.
var User = require('../models/user.js');
var Controller = require('../controllers/user.js');
var factories = require('../test/factories.js');

describe('User', function() {
    it('should be invalid if user ID is not defined', function(done) {
        var user = new User();

        user.validate(function(err) {
            expect(err.errors.userId).to.exist;
            done();
        });
    });

    it('should be valid if user ID is defined', function(done) {
        var user = new User({userId: 'QA0001'});

        user.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });
});

describe('Routes', function() {
    beforeEach(function() {
        sinon.stub(User, 'find');
        sinon.stub(User, 'findOne');
        sinon.stub(User, 'create');
        sinon.stub(User, 'findOneAndUpdate');
        sinon.stub(User, 'findOneAndRemove');
    });

    afterEach(function() {
        User.find.restore();
        User.findOne.restore();
        User.create.restore();
        User.findOneAndUpdate.restore();
        User.findOneAndRemove.restore();
    });

    it('should retrieve all users', function() {
        var userOne = factories.userOne();
        var userTwo = factories.userTwo();
        var userThree = factories.userThree();
        var expectedUsers = [userOne, userTwo, userThree];
        User.find.yields(null, expectedUsers);
        var req = { params: { } };
        var res = {
            json: sinon.stub()
        };

        Controller.GetUser(req, res, '');

        sinon.assert.calledWith(res.json, expectedUsers);
    });

    it('should retrieve one specific user', function() {
        var user = factories.userOne();
        User.findOne.yields(null, user);
        var req = { params: { userId: 'qa0001' } };
        var res = {
            json: sinon.stub()
        };

        Controller.GetUserById(req, res, '');

        sinon.assert.calledWith(res.json, user);
    });

    it('should not be able to retrieve user without user ID param', function(done) {
        var user = factories.userOne();
        User.findOne.yields(null, user);
        var req = { };
        var res = {
            json: sinon.stub()
        };

        Controller.GetUserById(req, res, function(error){
            expect(error).to.deep.equal(new Error("User ID must be defined in the request parameters."));
            done();
        });
    });

    it('should create a user', function() {
        var user = factories.userOne();
        User.find.yields(null, []);
        User.create.yields(null, user);
        var req = {
            body: user
        };
        var res = {
            json: sinon.stub()
        };

        Controller.PostUser(req, res, '');

        sinon.assert.calledWith(res.json, user);
    });

    it('should not create a user that already exists', function(done) {
        var user = factories.userOne();
        User.find.yields(null, user);
        var req = {
            params: {
                userId: 'qa0001'
            },
            body: user
        };
        var res = {
            json: sinon.stub()
        };

        Controller.PostUser(req, res, function(error){
            expect(error).to.deep.equal(new Error("User exists!"));
            done();
        });
    });

    it('should update a user', function() {
        var userThree = factories.userThree();
        User.findOneAndUpdate.yields(null, userThree);
        var req = {
            params: {
                userId: 'qa0001'
            },
            body: userThree
        };
        var res = {
            json: sinon.stub()
        };

        Controller.UpdateUser(req, res, '');

        sinon.assert.calledWith(res.json, userThree);
    });

    it('should not be able to update user without user ID param', function(done) {
        var user = factories.userThree();
        User.findOneAndUpdate.yields(null, user);
        var req = { };
        var res = {
            json: sinon.stub()
        };

        Controller.UpdateUser(req, res, function(error){
            expect(error).to.deep.equal(new Error("User ID must be defined in the request parameters."));
            done();
        });
    });

    it('should delete a user', function() {
        var user = factories.userOne();
        User.findOneAndRemove.yields(null, user);
        var req = { params: { userId: 'qa0001' } };
        var res = {
            json: sinon.stub()
        };

        Controller.DeleteUser(req, res, '');

        sinon.assert.calledWith(res.json, user);
    });

    it('should not be able to delete a user without user ID param', function(done) {
        var user = factories.userOne();
        User.findOneAndRemove.yields(null, user);
        var req = { };
        var res = {
            json: sinon.stub()
        };

        Controller.DeleteUser(req, res, function(error){
            expect(error).to.deep.equal(new Error("User ID must be defined in the request parameters."));
            done();
        });
    });
});