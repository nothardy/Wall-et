const { Router } = require("express");
const {
	getFaceDescriptor,
	postFaceDescriptor,
} = require("../controllers/face");
const route = Router();
const { verifyToken } = require("../middlewares/verifyToken");

route.use("/", verifyToken);
route.get("/", verifyToken, getFaceDescriptor);
route.post("/", verifyToken, postFaceDescriptor);

module.exports = route;
