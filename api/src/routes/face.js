const { Router } = require("express");
const {
	getFaceDescriptor,
	postFaceDescriptor /* aca */,
	getFaceDescriptorByMail,
	faceChecker,
} = require("../controllers/face");
const route = Router();
const { verifyToken } = require("../middlewares/verifyToken");

//route.use("/", verifyToken);
route.get("/", verifyToken, getFaceDescriptor);
route.post("/mail", getFaceDescriptorByMail); /* aca  */
route.post("/", verifyToken, postFaceDescriptor);
route.get("/check", faceChecker);

module.exports = route;
