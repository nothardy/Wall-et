const multer = require("multer")
const path = require("path")
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../uploads"),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase())
    }
})

const multerMiddleware = multer({
    storage: storage,
    dest: path.join(__dirname, "../public/uploads"),
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: file must be an image and should be a jpeg, jpg, png or a gif.")
    }
}).single("photo")

module.exports = {
    multerMiddleware
}