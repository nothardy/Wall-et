const { Router } = require("express");
const { getFaceDescriptorByMail, faceChecker } = require("../controllers/face");
const route = Router();

route.post("/mail", getFaceDescriptorByMail); /* aca  */
route.post("/check", faceChecker);

module.exports = route;
