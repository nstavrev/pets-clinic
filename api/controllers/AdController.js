/**
 * AdController
 *
 * @description :: Server-side logic for managing ads
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	ad : function(req,res){
		return res.view({layout : null});
	},
	postAd : function(req,res){
		return res.view({layout : null });
	},
	'' : function(req,res){
		console.log(req.params.all())
		Ad.findOne({id : req.params.all()['id'] }).populate('user').exec(function(err, ad){
			if(!ad) return res.status(400).send("Ad not found");
			return res.json(ad);
		});
	},
	create : function(req,res){
		var ad = req.body;
		User.findOne({email : req.user.email }, function(err, user){
			ad.user = user;
			Ad.create(ad, function(err, ad){
				if(err) return res.status(400).send("Invalid ad")
				return res.send("Ad created successfully");
			});
		});
	}
};

