let user = require('../model/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');


function register(req, res){
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    user.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        login: req.body.login,
        password: hashedPassword,
        photo: req.body.photo, 
        profil: req.body.profil
    }).then((user) => { 
        console.log(user)
        // create a token
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      })
      .catch((err) => {
        console.log(err)
        if (err) return res.status(500).send("There was a problem registering the user.")
    })

    console.log("POST user reçu :");
    console.log(user)
}
function signUp(req, res){
    user.findOne({
        login: req.body.login,
    }).then((user) => { 
        if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
        });
        user.password = undefined;
        res.status(200).send({ auth: true, token: token ,user:user});
      })
      .catch((err) => {
        console.log(err)
        if (err) return res.status(500).send("There was a problem registering the user.")
    })

    console.log("POST user reçu :");
    console.log(user)
}
module.exports = { register , signUp};
