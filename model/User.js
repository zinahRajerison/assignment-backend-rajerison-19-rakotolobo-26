var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({ 
    // id_user:Number,
    nom: String,
    prenom: String,
    login: String,
    password: String,
    photo: String, 
    profil:String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');