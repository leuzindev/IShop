const { Router } = require('express');
const emailAlreadyExists = require('../middlewares/emailExists');
const UserController = require('../user/user.controller');


const router = Router();


router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getUser)
router.get('/users/1/:name', UserController.getUserByName) // ARRUMAR

router.delete('/users/:id', UserController.deleteUser)

router.post('/users', UserController.createUser)

router.put('/users/:id', UserController.updateUser)

module.exports = router;