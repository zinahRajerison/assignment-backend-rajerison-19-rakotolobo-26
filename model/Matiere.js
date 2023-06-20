var mongoose = require('mongoose');  
let Schema = mongoose.Schema;
var MatiereSchema = new mongoose.Schema({ 
    nom: String,
    image: String, 
    id_user:{
        type: Schema.Types.ObjectId,
        ref: "users",
    }
});
mongoose.model('Matiere', MatiereSchema);

module.exports = mongoose.model('Matiere');