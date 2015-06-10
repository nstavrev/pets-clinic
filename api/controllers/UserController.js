/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	test : function(req,res){
		console.log(req.logout)
		res.json("test");
	}
};

