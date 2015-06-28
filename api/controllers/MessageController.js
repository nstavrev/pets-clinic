/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	messages : function(req,res){
		return res.view({ layout : null });
	},
	sendMessage : function(req,res){
		return res.view({ layout : null });
	},
	send : function(req,res){
		var message = req.body;
		message.from = req.user.id;
		// Correspondence
		// .findOne({ to : message.to.id, from : req.user.id }, 
		// 	function(err, correspondence){
		// 		if(!correspondence){
		// 			var correspondence = {
		// 				to : message.to.id, 
		// 				from : req.user.id,
		// 				messages : new Object([message])
		// 			}
		// 			// correspondence.messages.push(message);
		// 			console.log(correspondence);
		// 			Correspondence.create(correspondence, function(err, correspondence){
		// 				console.log(err);
		// 				return res.json(correspondence);
		// 			})
		// 		}
		// 	}
		// );
		Message.create(message, function(err, message){
			if(err) throw err;
			return res.json(message);
		});
	},
	messagesFromMe : function(req,res){
		User.findOne({email : req.params.all()['email']}, function(err, user){
			Message.find({ to : user.id, from : req.user.id })
			.populate('from')
			.populate('to').exec(
			function(err, messages){
				return res.json(messages);
			});
		});
	},
	messagesToMe : function(req,res){
		Message.find({ to : req.user.id })
		.populate('from')
		.populate('to').exec(
		function(err, messages){
			return res.json(messages);
		});
	}
};

