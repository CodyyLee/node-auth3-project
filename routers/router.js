const router = require('express').Router();

const jwt = require("jsonwebtoken");

const { jwtSecret } = require('../secrets/secret.js');

const restricted = require('./middleware.js');

const Users = require('../users/user-model.js');

//login
router.post('/login', (req, res) => {
    const user = req.body.id;

    Users.login(user)
        .then(user => {
            const token = signToken(user);
            res.status(200).json({token});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "An error occured trying to login."
            })
        })
})

//register
router.post('/register', (req, res) => {
    const user = req.body;

    Users.register(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error registering this user."
            })
        })
})

//get users
router.get('/users', restricted, (req, res) => {
    Users.getUsers()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error getting a list of users."
            })
        })
})

function signToken(user) {
    const payload = {
        user
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;