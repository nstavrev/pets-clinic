/**
 * ClinicController
 *
 * @description :: Server-side logic for managing clinics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	clinics : function(req,res){
		// var clinics = [
		// 	{ address : "Казичене 121", position:[42.696703, 23.319827]},
		// 	{ address : "Младост 2 Блок 251", position:[42.690142, 23.319827]},
		// 	{ address : "Лозенец улица Борова гора 6", position : [42.691782, 23.314076] }
		// ];
		// Clinic.create(clinics, function(err, clinics){
		// 	if(err) throw err;
		// 	console.log(clinics);
		// })
		return res.view({layout : null});
	},
	appointment : function(req,res){
		return res.view({layout : null});
	},
	'address/:address' : function(req,res){
		console.log(req.params);
		Clinic.find({address : new RegExp(req.params.address, 'i') }, function(err, clinics){
			if(err) throw err;
			return res.json(clinics);
		});
	}
};

