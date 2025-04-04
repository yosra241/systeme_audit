const mongoose = require('mongoose');

// 1-Create Schema
const TaskSchema = new mongoose.Schema({
  _id_task: String,
  date_debut_task: Date,
  date_fin_task: Date,
  statut_task: String,
  audit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'audit'
  }
}, { timestamps: true });
// 2-Create model
const taskModel = mongoose.model('task', TaskSchema);

module.exports = taskModel;