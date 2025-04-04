const express= require('express');
const {getAudit} = require('../services/auditServices');
const router = express.Router();
router.get('/', getAudit );
module.exports= router;