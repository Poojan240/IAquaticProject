const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ 
		HomeController, 
		FarmsController,
		PondsController	
	} = require('./controllers');

module.exports = function(app){	

	//router.get('/', HomeController.testIndex);

	router.get('/farms', FarmsController.index);
	router.post('/farms', FarmsController.store);
	router.get('/farms/:id', FarmsController.getById);
	router.put('/farms/:id', FarmsController.update);
	router.delete('/farms/remove/:id', FarmsController.remove);

	router.get('/ponds', PondsController.index);
	router.post('/ponds', PondsController.store);	
	router.get('/ponds/:id', PondsController.getById);
	router.get('/ponds/farm/:id', PondsController.getByFarmId);
	router.put('/ponds/:id', PondsController.update);

	router.delete('/ponds/remove/:id', PondsController.remove);

	app.use('/api', router);
};