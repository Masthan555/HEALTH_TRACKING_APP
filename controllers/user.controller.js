const User = require("../models/user.model");
const constants = require("../utils/constants");

/**
 * GET all hospitals based
 */
exports.getAllDoctors = async (req, res) => {
    try {
        const mongoQueryObj = {}
        // const hospitalId = req.query.hospitalId;
        // if(!hospitalId){
        //     return res.status(200).send({
        //         message: "HospitalId is required"
        //     })
        // }

        mongoQueryObj.userType = constants.userType.doctor;
        // mongoQueryObj['hospitalId._id'] = hospitalId;

        // find all hospitals
        const users = await User.find(mongoQueryObj);
        
        // return found hospital
        return res.status(200).send(users)
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error"
        })
    }
    
}
