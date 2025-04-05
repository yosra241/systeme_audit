const utilisateurModel = require("../models/utilisateurModel");
// Récupérer tous les utilisateurs
exports.getUtilisateur = (req, res) => {
    const name = req.body.name;
console.log(req.body);

const newUtilisateur = new newUtilisateurModel({name});
newUtilisateur
.save()
.then((utilisateurs)=>{
  res.json(utilisateurs);
})
.catch((err)=>{
  res.json(err);
  });
};
