/**
 * ClinicController
 *
 * @description :: Server-side logic for managing clinics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	clinics : function(req,res){
		return res.view({layout : null});
	}	
};

