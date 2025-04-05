const mongoose = require('mongoose');

// 1-Create Schema
const UtilisateurSchema = new mongoose.Schema({
    _id_utilisateur: {
        type: String,
        required: true,
        unique: true
      },
      nom: {
        type: String,
        required: true
      },
      prenom: {
        type: String,
        required: true
      },
      tel: {
        type: Number
      },
      mot_de_passe: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      role: {
        type: String,
        required: true,
        enum: ['Administrateur', 'Chef_projet', 'Auditeur']
      }
}, { timestamps: true });

// 2-Create model
const utilisateurModel = mongoose.model('utilisateur', UtilisateurSchema);

module.exports = utilisateurModel;