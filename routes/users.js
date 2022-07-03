const {Router} = require('express');
const { check } = require('express-validator');

const { fieldValidator } = require('../middlewares/field-validator');
const { isValidRole, emailExist } = require('../helpers/db-validators');
const { 
    usersGet, 
    usersPut, 
    usersPost, 
    usersDelete, 
    usersPatch 
} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.patch('/', usersPatch);

router.post('/', [
    check('name', 'Name is required').isEmpty(),
    check('email', 'Email not valid').isEmail(),
    check('email').custom(emailExist),
    check('password', 'Password must be at least 6 characters').isLength({min: 6}),
    // check('role', 'Role not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    fieldValidator
], usersPost);

router.delete('/', usersDelete);

module.exports = router;