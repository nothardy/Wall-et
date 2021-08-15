const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const multerMiddleware = multer({
    storage: storage,
    dest: path.join(__dirname, "../public/uploads")
}).single("photo")

module.exports = {
    multerMiddleware
}