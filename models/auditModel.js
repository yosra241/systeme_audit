const mongoose = require('mongoose');
//1-Create Schema
const AuditSchema = new mongoose.Schema({
    
  _id_audit: String,
  titre: String,
  date_debut: Date,
  date_fin: Date,
  statut: String,
  chef_projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chef_projet'
  }
}, { timestamps: true });

  //2-Create  model
  const auditModel =mongoose.model('audit', AuditSchema);
  module.exports= auditModel;