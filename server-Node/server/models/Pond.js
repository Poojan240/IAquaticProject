const mongoose = require('mongoose');

const pondModel = mongoose.Schema({
  name: {
    type: String,
  },

  size: {
    type: String
  },
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm'
  },

},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Pond', pondModel);

