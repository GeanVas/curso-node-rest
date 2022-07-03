const Role = require('../models/role');

const isValidRole = async (role = '') => {
    const roleExists = await Role.findOne({role});
    if(!roleExists)
        throw new Error(`${role} is not registered in DB`);
}


module.exports = {
    isValidRole
}