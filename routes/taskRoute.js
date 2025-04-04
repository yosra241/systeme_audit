const express = require('express');

const { getTask} = require('../services/taskServices');
const router = express.Router();

// Récupérer toutes les tâches
router.get('/', getTask);

module.exports= router;