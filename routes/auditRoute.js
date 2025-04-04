const express= require('express');

const {getAudit} = require('../services/auditServices');
const router = express.Router();
// Récupérer tous les audits
router.get('/', getAudit );

module.exports= router;