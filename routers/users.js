const express = require('express');
const router = express.Router();
const User = require('../schemas/User');

router.get('/', async function (req, res) {
    try {
        var aUsers = await User.find();
        res.status(200).json(aUsers);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});
router.get('/:userId', async function (req, res) {
    try {
        var user = await User.findById(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});
router.post('/', async function (req, res) {
    const user = new User(req.body);
    try {
        var userToSave = await user.save();
        res.status(200).json({
            "satus": "SUCCESS",
            "message": "new user created",
            "user": userToSave
        })
        console.log("Saved new user \n " + userToSave);
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
});

module.exports = router;