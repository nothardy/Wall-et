const updatePhoto = (req, res) => {
    console.log(req.file)
    res.send('uploaded')
}

module.exports = {
    updatePhoto
};