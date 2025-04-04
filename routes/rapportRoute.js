const express = require('express');
const { getRapport } = require('../services/rapportServices');
const router = express.Router();

// Récupérer tous les rapports
router.get('/', getRapport);

module.exports = router;
