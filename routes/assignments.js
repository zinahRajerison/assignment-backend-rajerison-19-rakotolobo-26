let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
function getAssignmentsSansPagination(req, res){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        Assignment.find((err, assignments) => {
            if(err){
                res.send(err)
            }

            res.send(assignments);
        });
    })
}

function getAssignments(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        var aggregateQuery = Assignment.aggregate();
        
        Assignment.aggregatePaginate(aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, assignments) => {
            if (err) {
            res.send(err);
            }
            res.send(assignments);
        }
        );
    })
   }
   
// Récupérer un assignment par son id (GET)
function getAssignment(req, res){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        let assignmentId = req.params.id;

        Assignment.findOne({_id: assignmentId}, (err, assignment) =>{
            if(err){res.send(err)}
            res.json(assignment);
        })
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        let assignment = new Assignment();
        // assignment.id = req.body.id;
        assignment.nom = req.body.nom;
        assignment.dateDeRendu = req.body.dateDeRendu;
        assignment.sujet = req.body.sujet;
        assignment.rendu = req.body.rendu;
        assignment.id_auteur = req.body.id_auteur;
        assignment.id_matiere = req.body.id_matiere;
        assignment.note = req.body.note;
        assignment.remarques = req.body.remarques;

        console.log("POST assignment reçu :");
        console.log(assignment)

        assignment.save( (err) => {
            if(err){
                res.send('cant post assignment ', err);
            }
            res.json({ message: `${assignment.nom} saved!`})
        })
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        console.log("UPDATE recu assignment : ");
        console.log(req.body);
        
        Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
            if (err) {
                console.log(err);
                res.send(err)
            } else {
            res.json({message: assignment.nom + 'updated'})
            }

        // console.log('updated ', assignment)
        });
    })

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        Assignment.findByIdAndRemove(req.params._id, (err, assignment) => {
            if (err) {
                res.send(err);
            }
            res.json({message: `${assignment.nom} deleted`});
        })
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
