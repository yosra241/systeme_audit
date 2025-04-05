const mongoose = require('mongoose');

// 1-Create Schema
const RapportSchema = new mongoose.Schema({
  _id_rapport: {
    type: String,
    required: true,
    unique: true
  },
    created_at_rapport: {
    type: Date,
    default: Date.now
  },
  type_rapport: {
    type: String,
    enum: ['Technique', 'ANCS', 'Physique'],
    required: true
  },
  url_fichier: {
    type: String
  },
      // Référence à l'audit associé

  audit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'audit',
    required: true
  }
}, { timestamps: true });

// 2-Create model
const rapportModel = mongoose.model('rapport', RapportSchema);

module.exports = rapportModel;