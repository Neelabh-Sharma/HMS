const express = require('express');
const { getUsers, createUser ,getUserByEmailAndPassword ,updateUserByEmail ,getUserByEmail } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', getUserByEmailAndPassword);
router.put('/email/:email', updateUserByEmail);
router.get('/email/:email', getUserByEmail);

module.exports = router;
