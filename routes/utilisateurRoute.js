const express = require('express');
const { getUtilisateur } = require('../services/utilisateurServices');
const router = express.Router();

// Récupérer tous les utilisateurs
router.get('/', getUtilisateur);

module.exports= router;