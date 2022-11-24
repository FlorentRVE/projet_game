const User = require('../model/user');

exports.displayUser = (req, res, next) => {
    User.find()
    .then((users) => {res.status(200).json(users)})
    .catch((error) => {res.status(400).json({error: error})});
};