

const express = require('express');

const userController = require('../controllers/booking_app');

const router = express.Router();

// /api/add-user => GET
// router.get('/add-user', userController.getAddUser);

// /api/users => GET
 router.get('/users', userController.getUsers);

// /api/add-user => POST
router.post('/add-user', userController.postAddUser);

// router.get('/edit-user/:userId', userController.getEditUser);

router.post('/edit-user/', userController.postEditUser);
router.post('/delete-user/', userController.postDeleteUser);

module.exports = router;
