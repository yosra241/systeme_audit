const mongoose = require('mongoose');

// 1-Create Schema
const AuditeurSchema = new mongoose.Schema({
  _id_auditeur: String,
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'utilisateur'
  }
}, { timestamps: true });

// 2-Create model
const auditeurModel = mongoose.model('auditeur', AuditeurSchema);

module.exports = auditeurModel;