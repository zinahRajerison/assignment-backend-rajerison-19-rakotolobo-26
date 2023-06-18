let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    nom: String,
    dateDeRendu : Date,
    sujet: String,
    rendu: Boolean,
    id_auteur: String,
    id_matiere: String,
    note: Number,
    remarques: String,
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// le nom de la collection (par défaut assignments) sera au pluriel, 
// soit assignments
// Si on met un nom "proche", Mongoose choisira la collection
// dont le nom est le plus proche
module.exports = mongoose.model('assignments', AssignmentSchema);
