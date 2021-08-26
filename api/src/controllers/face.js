const { Account, Transaction, Card, Contact } = require("../db");
const { v4: uuidv4 } = require("uuid");

const getFaceDescriptor = async (req, res, next) => {
	const id = req.userId;
	try {
		const user = await Account.findByPk(id);
		res.json(user.dataValues.faceDescriptor.valueOf());
	} catch (error) {
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

		res.json({ msg: "Face Descriptor data updated!" });
	} catch (error) {
		next(error);
	}
};

const getFaceDescriptorByMail = async ( req, res, next ) => {
	console.log("entro")
	const {mail} = req.body;
	console.log(mail)
	try{
		const user =  await Account.findOne({where: { mail:mail }})
		res.status(200).json(true)
	}
	catch(err){
		console.log(err)
		res.status(404).json({respuesta:"me caigo a pedazos"})
	}
}

module.exports = { getFaceDescriptor, postFaceDescriptor, getFaceDescriptorByMail };
