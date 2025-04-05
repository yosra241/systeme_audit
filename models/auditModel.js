const mongoose = require('mongoose');
//1-Create Schema
const AuditSchema = new mongoose.Schema({
    
  
  titre: {
    type: String,
    //required: true
  },
    date_debut: {
      type: Date,
      //required: true
    },
    date_fin: {
      //type: Date
    },
  statut: {
    type: String,
    enum: ['Planifié', 'En cours', 'Terminé', 'Annulé'],
    default: 'Planifié'
  }, 

    // Référence au Chef de projet
  chef_projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'chef_projet',
    //required: true

  },
    // Relation avec les tâches

}, { timestamps: true });

  //2-Create  model
  const auditModel =mongoose.model('audit', AuditSchema);
  module.exports= auditModel;