const express = require('express');
const router = express.Router();
const User = require('../schemas/User');

router.post('/', async function(req, res){
    const user = new User(req.body);
    try {
        const userToSave = await user.save();
        res.status(200).json({
            "message": "new user created",
            "user": userToSave.firstName 
        })
        console.log("Saved new user \n " + userToSave);
    } catch (error) {
        res.status(500).json({
            message: error
        });   
    }
})

module.exports = router;