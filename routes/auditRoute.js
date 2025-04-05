const express= require('express');

const {getAudit,createAudit} = require('../services/auditServices');

const router = express.Router();

// Récupérer  et créer tous les audits
router.route('/').get(getAudit).post(createAudit);

module.exports= router;