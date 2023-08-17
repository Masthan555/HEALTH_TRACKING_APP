/**
 * This file will act as the route for authentication and authorzation
 * 
 */

module.exports = (app)=>{
    
    //  POST 127.0.0.1:8080/getfit/api/v1/auth/signup
    app.get("/getfit/signup", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/signup.html");
    });

    //Sign POST 127.0.0.1:8080/getfit/api/v1/auth/signin
    app.get("/getfit/signin", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/signin.html");
    });

    app.get("/getfit/createHealthRecord", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/createHealthRecord.html");
    });

    app.get("/getfit/getHealthRecords", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/getHealthRecords.html");
    });

    app.get("/getfit/takeAppointment", (req, res)=>{
        res.sendFile(process.cwd() + "/frontend/takeAppointment.html");
    });
}