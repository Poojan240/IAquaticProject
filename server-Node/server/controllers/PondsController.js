const { Farm, Pond } = require('../models');

module.exports = {
	async index(req, res) {
		const ponds = await Pond.find().populate('ponds');
		res.send(ponds);
	},

	async store(req, res) {
		console.log(req.body)

		const pond = new Pond({
			name: req.body.name,
			size: req.body.size,
			farm: req.body.farm

		});

		try {
			console.log(pond);
			const savedPost = await pond.save()
			res.json(savedPost);
		}
		catch (err) {
			res.json({ message: err })

		}


	},
	async getById(req, res) {
		const pond = await Pond.findById(req.params.id);
		res.send(pond);
	},

	async getByFarmId(req, res) {
		const ponds = await Pond.find({farm : req.params.id});
		res.send(ponds);
	},
	async update(req, res) {
		const updatedPond = await Pond.update({ _id: req.params.id }, { $set: { name: req.body.name, size: req.body.size} });
		res.json(updatedPond);
	  },
	  async remove(req, res) {                                                                                                                               
		const item = await Pond.remove({_id:req.params.id });
		res.json(item);
	  }                                                                                                                                                        

};                                               