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
route.post("/", verifyToken, postFaceDescriptor);
route.get("/", verifyToken, getFaceDescriptor);

module.exports = route;
