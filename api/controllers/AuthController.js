/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {
	_config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
    currentUser : function(req,res){
        if(req.user){
            return res.json(req.user.username);
        }
        return res.send(undefined);
    },
    login: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.status(401).send("Invalid username or password");
            }
            req.login(user, function(err) {
                if (err) return res.send(err);
                return res.send("Authentication successful")
            });

        })(req, res);
    },
    signup : function(req,res){
        User.create(req.body, function(err, user){
            if(err)  throw err;
            res.send("Registration successful");
        });
    },
    signin : function(req,res){
        res.view("auth");
    },
    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

