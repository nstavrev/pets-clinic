/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	profile : function(req,res){
		return res.view({layout : null});
	},
	editProfile : function(req,res){
		return res.view({layout : null});
	},
	account : function(req,res){
		User.findOne({email : req.user.email }).populate('pet').exec(function(err, user){
			if(err) throw err;
			return res.json(user);
		})
	},
	friend : function(req,res){
		User.findOne({email : req.params.all()['email']}, function(err, user){
			return res.json(user);
		});
	},
	editAccount : function(req,res){
		User.update({ username : req.user.username }, req.body, function(err, user){
			if(err) throw err;
			return res.send("Profile has been updated successfully")
		});
	}
};

