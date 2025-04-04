const mongoose = require('mongoose');

// 1-Create Schema
const RapportSchema = new mongoose.Schema({
  _id_rapport: String,
  created_at_rapport: {
    type: Date,
    default: Date.now
  },
  type_rapport: String,
  url_fichier: String,
  audit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'audit'
  }
}, { timestamps: true });

// 2-Create model
const rapportModel = mongoose.model('rapport', RapportSchema);

module.exports = rapportModel;