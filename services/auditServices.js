const auditModel =require("../models/auditModel");

// Récupérer tous les audits

exports.getAudit = (req, res) => {
 //   const titre = req.body.titre;
//console.log(req.body);
res.send();

//const newAudit = new auditModel({titre});
//newAudit
//.save()
//.then((doc)=>{
  //res.json(doc);
//})
//.catch((err)=>{
  //res.json(err);
 // });
};
exports.createAudit = async(req , res) =>{
  const titre = req.body.titre;
  auditModel.create({titre})
  .then(audit => res.status(201).json({data: audit}))
  .catch((err)=> res.status(400).send(err));

};

