const { Account, Transaction, Card, Contact } = require("../db");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const faceApi = require("face-api.js");

const getFaceDescriptor = async (req, res, next) => {
	const id = req.userId;
	try {
		const user = await Account.findByPk(id);
		//console.log * user;
		if (!user) return res.sendStatus(400);
		if (user.dataValues.faceDescriptor)
			res.json(user.dataValues.faceDescriptor.valueOf());
	} catch (error) {
		console.log(error);
		next(error);
	}
};

const postFaceDescriptor = async (req, res, next) => {
	const id = req.userId;
	const faceDescriptor = req.body;
	console.log("Face descriptor==>", faceDescriptor);
	try {
		const user = await Account.findByPk(id);

		user.update({
			faceDescriptor,
		});

		return res.json({ msg: "Face Descriptor data updated!" });
	} catch (error) {
		next(error);
	}
};

const getFaceDescriptorByMail = async (req, res, next) => {
	console.log("entro");
	const mail = req.body.mail;
	console.log(mail);
	try {
		const user = await Account.findOne({ where: { mail: mail } });
		if (!user || !user.dataValues.faceDescriptor)
			return res.status(400).send("No hay cara");

		return res.status(200).json({
			exists: true,
			userFace: user.dataValues.faceDescriptor.valueOf(),
		});
	} catch (err) {
		console.log(err);
		res.status(404).json({ respuesta: "me caigo a pedazos" });
	}
};

const faceChecker = async (req, res, next) => {
	try {
		let token;
		let check = false;
		let detections = req.body.detections;
		const mail = req.body.mail;
		const user = await Account.findOne({ where: { mail: mail } });
		let userFace = user.dataValues.faceDescriptor.valueOf();
		userFace = userFace.replace(/'/g, '"');
		userFace = JSON.parse(userFace);
		userFace = userFace.map(
			(element) => new Float32Array(Object.values(element))
		);
		detections = detections.map(
			(element) => new Float32Array(Object.values(element))
		);

		if (detections.length === userFace.length) {
			let faceCheck = [];
			let faceCheckAverage = 0;

			for (let i = 0; i <= 9; i++) {
				faceCheck.push(
					faceApi.euclideanDistance(detections[i], userFace[i])
				);
				faceCheckAverage = faceCheckAverage + faceCheck[i];
			}
			faceCheckAverage = faceCheckAverage / 10;

			if (faceCheckAverage <= 0.45) {
				check = true;
				token = jwt.sign({ id: user.id }, "mysecretkey", {
					expiresIn: 60 * 30,
				});
				return res.json({ check: check, token: token });
			}
		}
		throw new Error("Las caras no coinciden");
	} catch (error) {
		console.log(error);
		next(error);
	}
};

module.exports = {
	getFaceDescriptor,
	postFaceDescriptor,
	getFaceDescriptorByMail,
	faceChecker,
};
