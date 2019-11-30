const express = require('express');
const router = express.Router();
const EmployeeInputs = require('../Models/employeeInputs');   
const EmployeeCredentials = require('../Models/userRegistration');



//@type                      GET
//@route                    /posts
//@description          This route is for fetching employeeInput data 
//@access                  Public
router.get("/posts",  async(req,res) => {
    try {
        const responses = await EmployeeInputs.find();
        res.send(responses);
        
    }
    catch (err) {
        console.log(err);
    }
  });


//@type                      POST
//@route                    /login
//@description          This route is for employee login
//@access                  Public
router.post("/login", async(req,res) => {
    try {
        const responses = await EmployeeCredentials.find();
        const requestUser = req.body.auth;
        const dbUser = responses[0].credentials;
        if (requestUser.username == dbUser.employeeId && 
            requestUser.password == dbUser.employeePassword) {
                console.log("Found")
                res.sendStatus(200);
            }
         else {
             res.sendStatus(404);
         }
    }
    catch (err) {
        res.sendStatus(404);
    }
})




  module.exports = router;