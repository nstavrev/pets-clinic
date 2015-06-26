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
	my : function(req,res){
		console.log(req.user.email);
		User.findOne({email : req.user.email}, function(err, user){
			Ad.find({user : user.id }).populate('user').exec(function(err, myAds){
				if(err) throw err;
				return res.json(myAds);
			});
		});
	},
	'myAd/:_id' : function(req,res){
		console.log(req.params);
		User.findOne({email : req.user.email }, function(err, user){
			Ad.findOne({ id : req.params._id, user : user.id }).populate('user').exec(function(err, myAd){
				return res.json(myAd);
			});
		});
	},
	editAd : function(req,res){
		return res.view({layout : null});
	},
	postAd : function(req,res){
		return res.view({layout : null });
	},
	ads : function(req,res){
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
			ad.user = user.id;
			Ad.create(ad, function(err, ad){
				if(err) return res.status(400).send("Invalid ad")
				return res.send("Ad created successfully");
			});
		});
	},
	edit : function(req,res){
		var ad = req.body;
		User.findOne({email : req.user.email }, function(err, user){
			ad.user = user;
			Ad.update({ id : ad.id, user : user.id }, { content : ad.content }, function(err, result){
				if(err) {
					console.log(err);
				}
				return res.send("Ad updated successfully");
			});
		});
	},
	remove : function(req,res){
	}
};

