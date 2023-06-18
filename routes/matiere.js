let matiere = require('../model/matiere');
function createnew(req, res){
    matiere.create({
        nom: req.body.nom,
        image: req.body.image, 
        id_user: req.body.id_user
    }).then((matiere) => { 
        console.log(matiere)
        res.status(200).send({ matiere: matiere.nom });
      })
      .catch((err) => {
        console.log(err)
        if (err) return res.status(500).send("There was a problem creating a course.")
    })
}
function getMatieres(req, res){
    matiere.find((err, matieres) => {
        if(err){
            res.send(err)
        }

        res.send(matieres);
    });
}
module.exports = { createnew, getMatieres };
