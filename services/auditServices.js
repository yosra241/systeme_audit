const auditModel =require("../models/auditModel");

exports.getAudit = (req, res) => {
    const name = req.body.name;
console.log(req.body);

const newAudit = new auditModel({name});
newAudit
.save()
.then((doc)=>{
  res.json(doc);
})
.catch((err)=>{
  res.json(err);
  });
};
