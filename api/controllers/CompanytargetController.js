/**
 * CompanytargetController
 *
 * @description :: Server-side logic for managing companytargets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	createCompany: function(req, res, next) {

 		var companyObj = { //on passe les parametres en objet pour la securité
 			
 			cname: req.param('cname'),
 			hashtag: req.param('hashtag'),
 			how: req.param('how'),
 			url: req.param('url'),
 			authorIdlastname: req.session.User.lastname,
 			authorIdfirstname: req.session.User.firstname,
 			authorDepartment: req.session.User.departement


 		}

 		Companytarget.create(companyObj, function companyCreated(err, company) {

 			if (err) {
 				 console.log(err);
 				//if error redirect back to sign-up page
 				return res.redirect('/user/addcompany/'+req.session.User.id);

 			}

 			company.save(function(err, company) {
 				if (err) return (err);

 				res.redirect('/user/companydirectory/'+req.session.User.id);
 			});

 		
 		});
 	},


 	deletefromfavorite: function(req, res, next) {

 		var favoriteObj = { //on passe les parametres en objet pour la securité
 			
 			favorite: false,
 			
 		}

 		Companytarget.update(req.param('id'),favoriteObj, function favoriteObj(err,thefavoritecompany) {
            if (err) return next(err);
                        
        });

            res.redirect('/user/companydirectory/'+req.session.User.id);
 	},


 	favorite: function(req, res, next) {

 		var favoriteObj = { //on passe les parametres en objet pour la securité
 			
 			favorite: true,
 			
 		}

 		Companytarget.update(req.param('id'),favoriteObj, function favoriteObj(err,thefavoritecompany) {
            if (err) return next(err);
                        
        });

            res.redirect('/user/companydirectory/'+req.session.User.id);
 	},


 	// <!-- marche pas  -->
 	companyupdate: function(req, res, next) {

    
 		// Data transfer object
 		
 		var companyObj = { //on passe les parametres en objet pour la securité
 			cname: req.param('cname'),
 			hashtag: req.param('hashtag'),
 			how: req.param('how'),
 			url: req.param('url')
 		}
 		

 		Companytarget.update(req.param('id'), companyObj, function companyUptated(err) {
      

 			if (err) {
 				return res.redirect('/user/companyedit/' + req.params('id'))
 			}
 			res.redirect('/user/companydirectory/' + req.param('id'));
 		});
 	},
 	// <!-- marche pas  -->


 	destroy: function(req, res, next) {
 		Companytarget.findOne({
 				id: req.params['id']
 			})
 			.exec(function foundUser(err, company) {
 				if (err) return next(err);
 				if (!company) return next('company doesn\'t exist.');

 				Companytarget.destroy(req.param('id'), function companytargetDestroyed(err) {
 					if (err) return next(err);
 				});

 				res.redirect('/user/companydirectory/'+req.session.User.id);
 			});
 	}
	
};

