const taskModel = require("../models/taskModel");
// Récupérer toutes les tâches

exports.getTask = (req, res) => {
    const name = req.body.name;
console.log(req.body);

const newTask = new newTaskModel({name});
newTask
.save()
.then((tasks)=>{
  res.json(tasks);
})
.catch((err)=>{
  res.json(err);
  });
};
