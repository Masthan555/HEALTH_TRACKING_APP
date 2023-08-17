
const hospitalRoutes = require('./hospital.routes')
const authRoutes = require('./auth.routes')
const healthTrackRecordRoutes = require("./healthTrackRecord.routes");
const appointmentRoutes = require("./appointment.routes");
const prescriptionRoutes = require("./prescription.routes");
const userScreensRoutes = require("./userScreens.routes");
const userRoutes = require("./user.routes");

module.exports = (app)=>{
    hospitalRoutes(app);
    authRoutes(app);
    healthTrackRecordRoutes(app);
    appointmentRoutes(app);
    prescriptionRoutes(app);
    userScreensRoutes(app);
    userRoutes(app);
}