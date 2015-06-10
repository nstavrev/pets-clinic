/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create : function(req,res){
		// User.create({email : "nstavrev28@gmail.com", password : "123456"}, function(err, users){
		// 	if(err) return res.json(err);
		// 	res.json("Everything is ok man .. ;)");
		// });
	},
	resource : function(req,res){
		return res.json("you are loggedin so you can see this resource");
	}
};

