
const Farm = require('../models/Farm');


const FarmsController = {
  async index(req, res) {
    const farms = await Farm.find().populate('farms');
    res.send(farms);
  },
  async store(req, res) {
    console.log(req.body.ponds);

    const farm = new Farm({
      name: req.body.name,
      location: req.body.location,
      size: req.body.size,
    });

    try {
      const savedPost = await farm.save()
      res.json(savedPost);
    }
    catch (err) {
      res.json({ message: err })

    }
  },
  async getById(req, res) {
    console.log(req.params.id);
    const farm = await Farm.findById(req.params.id);
    res.send(farm);
  },
  async update(req, res) {
    const updatedFarm = await Farm.update({ _id: req.params.id }, { $set: { name: req.body.name, size: req.body.size, location: req.body.location } });
    res.json(updatedFarm);
  },

  async remove(req, res) {
    console.log("Delete");
    const item = await Farm.remove({ _id: req.params.id });
    res.json(item);
  }
};

module.exports = FarmsController;