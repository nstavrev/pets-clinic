/**
 * AppointmentController
 *
 * @description :: Server-side logic for managing appointments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	appointment : function(req,res){
		return res.view({ layout : null });
	},
	create : function(req,res){
		console.log(req.body);
		Appointment.create(req.body, function(err, appointment){
			if(err) throw err;
			return res.send("Appointment created");
		});
	}
};

