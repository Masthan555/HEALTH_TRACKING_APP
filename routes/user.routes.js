
/**
 * This file will act as the route for authentication and authorzation
 * 
 */

// define the routes - REST endpoints for Hospital

const userController = require("../controllers/user.controller")

module.exports = (app)=>{
    
    // GET ALL DOCTORS
    app.get("/getfit/api/v1/doctors", userController.getAllDoctors);
    
}