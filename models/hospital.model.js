
const mongoose = require("mongoose");


const hospitalSchema = new mongoose.Schema({

    /**
     * name, address
     * doctor_ids-[ref]
     */
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    doctor_ids :{
        type : [mongoose.SchemaTypes.ObjectId],
        ref: "User"
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },

});

module.exports = mongoose.model("Hospital", hospitalSchema);
