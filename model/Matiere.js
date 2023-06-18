var mongoose = require('mongoose');  
var MatiereSchema = new mongoose.Schema({ 
    nom: String,
    image: String, 
    id_user:String
});
mongoose.model('Matiere', MatiereSchema);

module.exports = mongoose.model('Matiere');