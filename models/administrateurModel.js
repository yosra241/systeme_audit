const mongoose = require('mongoose');

// 1-Create Schema
const AdministrateurSchema = new mongoose.Schema({
    _id_admin: {
        type: String,
        required: true,
        unique: true
      },
        utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'utilisateur'
  }
}, { timestamps: true });

// 2-Create model
const administrateurModel = mongoose.model('administrateur', AdministrateurSchema);

module.exports = administrateurModel;