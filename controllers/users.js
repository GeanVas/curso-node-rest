const {response} = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersGet = (req, res = response) => {
    res.json({
        msg: "get API controller"
    });
}

const usersPost = async (req, res) => {

    const {name, mail, password, role} = req.body;
    const user = new User({name, mail, password, role});

    const emailExist = await User.findOne({correo});
    if(emailExist) {
        return res.status(400).json({
            msg: 'Email already in use'
        });
    }

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}

const usersPut = (req, res) => {
    res.json({
        msg: "put API controller"
    });
}

const usersPatch = (req, res) => {
    res.json({
        msg: "patch API controller"
    });
}

const usersDelete = (req, res) => {
    res.json({
        msg: "delete API controller"
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}