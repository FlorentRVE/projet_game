const User = require('../model/user');

exports.displayUser = (req, res, next) => {
    User.find()
    .then((users) => {res.status(200).json(users)})
    .catch((error) => {res.status(400).json({error: error})});
};

exports.login = async (req, res, next) => {
    let bool = false;

    await User.find()
    .then(users => {
        users.forEach(element => {
            if(req.body.pseudo === element.pseudo && req.body.mdp === element.mdp) {
                bool = true
            }
        });

        if(bool === true) {
        return res.status(200).json(users)
        }
    }
    )
    .catch(error => res.status(500).json({error}));
};