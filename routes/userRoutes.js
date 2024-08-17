const express = require('express');
const {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    patchUser,
    deleteUser
} = require('../controller/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
