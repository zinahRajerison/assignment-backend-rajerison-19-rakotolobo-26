let matiere = require('../model/matiere');
function createnew(req, res){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
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
    })
}
function getMatieres(req, res){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        matiere.find((err, matieres) => {
            if(err){
                res.send(err)
            }

            res.send(matieres);
        });
    })
}
module.exports = { createnew, getMatieres };
