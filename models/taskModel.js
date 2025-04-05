const mongoose = require('mongoose');

// 1-Create Schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id_task: {
    type: String,
    required: true,
    unique: true
  },
  date_debut_task: {
    type: Date,
    required: true
  },
  date_fin_task: {
    type: Date
  },
  statut_task: {
    type: String,
    enum: ['À faire', 'En cours', 'Terminée', 'Bloquée'],
    default: 'À faire'
  },
    // Référence à l'audit parent
  audit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'audit',
    required: true
  },
   // Référence à l'auditeur assigné
   //auditeur: {
    //type: Schema.Types.ObjectId,
    //ref: 'Auditeur'
  //}
}, { timestamps: true });

// 2-Create model
const taskModel = mongoose.model('task', TaskSchema);

module.exports = taskModel;