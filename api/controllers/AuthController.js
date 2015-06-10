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
    login: function(req, res) {
    	console.log("login");
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.login(user, function(err) {
                if (err) return res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });

        })(req, res);
    },
    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

