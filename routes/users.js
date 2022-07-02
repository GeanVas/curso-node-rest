const {Router} = require('express');
const { 
    usersGet, 
    usersPut, 
    usersPost, 
    usersDelete, 
    usersPatch 
} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.put('/', usersPut);

router.patch('/', usersPatch);

router.post('/', usersPost);

router.delete('/', usersDelete);

module.exports = router;