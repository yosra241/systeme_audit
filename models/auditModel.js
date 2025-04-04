const mongoose = require('mongoose');
//1-Create Schema
const AuditSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    
  });
  //2-Create  model
  const auditModel =mongoose.model('audit', AuditSchema);
  module.exports= auditModel;