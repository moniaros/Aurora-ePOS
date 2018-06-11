const   User        = require('../models/user'),
    message     = require('../middleware').message,
    jwt         = require('jsonwebtoken'),
    SECRET      = require('../../local_conf.js').SECRET

exports.createUser = (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        isAdmin: false
    })
        .then((user) => {
            const token = jwt.sign({_id: user.id}, SECRET)
            res.status(200).json({
                _id: user.id,
                username: user.username,
                loggedIn: true,
                token
            })
        })
        .catch(err => {
            if(err.code === 11000 || err.name == 'UserExistsError'){
                res.status(409).json({loggedIn: false, message: 'User with this name already exists.'})
            } else {
                res.status(500).json({loggedIn: false, message: 'Uknown error'})
            }

        })
}

exports.authUser = (req, res) => {
    User.findOne({username: req.body.username}).select('+password')
        .then(user => {
            if(!user) {
                return res.status(400).json({message: 'Invalid Username/Password', loggedIn: false})
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if(isMatch){
                    const token = jwt.sign({_id: user.id}, SECRET)
                    res.status(200).json({
                        _id: user.id,
                        username: user.username,
                        loggedIn: true,
                        token
                    })
                } else {
                    res.status(400).json({message: 'Invalid Username/Password', loggedIn: false})
                }
            })
        })
}

exports.getUserData = (req, res) => {
    return User.findById(req.userId).lean()
        .then(user => {
            if(!user) {
                return res.status(400).json({message: 'Please log in first', loggedIn: false})
            }
            res.json({user, loggedIn: true})
        })
        .catch(() => res.status(401))
}

exports.updateUser = (req, res) => {
    return User.findById(req.userId)
        .then(user => {
            user.currency = req.body.currency || user.currency
            return user.save()
                .then(() => exports.getUserData(req, res))
        })
        .catch((err) => message(req, res, err.message))
}

module.exports = exports
