const {response} = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersGet = (req, res = response) => {
    res.json({
        msg: "get API controller"
    });
}

const usersPost = async (req, res = response) => {

    const {name, mail, password, role} = req.body;
    const user = new User({name, mail, password, role});

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}

const usersPut = async (req, res = response) => {

    const {id} = req.params;
    const { password, google, ...resto } = req.body;

    if( password ) {
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, resto) ;

    res.json({
        msg: "put API controller",
        user
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: "patch API controller"
    });
}

const usersDelete = (req, res = response) => {
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