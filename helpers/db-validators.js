const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
    const roleExists = await Role.findOne({role});
    
    if(!roleExists) {
        throw new Error(`${role} is not registered in DB`);
    }
}

const emailExist = async (email = '') => {
    const exists = await User.findOne({email});

    if(exists) {
        throw new Error('Email is already registered');
    }
}

const userExistsById = async (id) => {
    const userExists = await User.findById(id);

    if(!userExists) {
        throw new Error(`Id: ${id} doesn't exists`);
    }
}

module.exports = {
    isValidRole,
    emailExist,
    userExistsById
}