const { Router } = require("express");
const {
	getFaceDescriptor,
	postFaceDescriptor,						/* aca */
	getFaceDescriptorByMail,
} = require("../controllers/face");
const route = Router();
const { verifyToken } = require("../middlewares/verifyToken");

route.use("/", verifyToken);
route.get("/", verifyToken, getFaceDescriptor);
route.post("/mail", getFaceDescriptorByMail);			/* aca  */
route.post("/", verifyToken, postFaceDescriptor);

module.exports = route;
