const mongoose = require('mongoose');

// 1-Create Schema
const ChefProjetSchema = new mongoose.Schema({
  _id_chef: String,
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'utilisateur'
  }
}, { timestamps: true });

// 2-Create model
const chefProjetModel = mongoose.model('chef_projet', ChefProjetSchema);

module.exports = chefProjetModel;