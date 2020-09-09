const mongoose = require('mongoose');

const farmModel = mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  ponds: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Pond' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Farm', farmModel);




