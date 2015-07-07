/**
 * AnimalController
 *
 * @description :: Server-side logic for managing animals
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
    
    definition: function(req, res) {
        res.json(Animal.definition);
    }

};

