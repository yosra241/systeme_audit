const rapportModel = require("../models/rapportModel");
// Récupérer tous les rapports

exports.getRapport = (req, res) => {
    const name = req.body.name;
console.log(req.body);

const newRapport = new rapportModel({name});
newRapport
.save()
.then((rapports)=>{
  res.json(rapports);
})
.catch((err)=>{
  res.json(err);
  });
};