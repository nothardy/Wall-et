 const { Router } = require('express');
 const route = Router();
 const { deleteFav } = require('../controllers/deleteFav');
 const { verifyToken } = require("../middlewares/verifyToken");

 route.delete('/favorites', verifyToken, async (req, res) => {
    try {
        const { mail } = req.query;
        const { userId } = req

        res.status(200).json(await deleteFav( userId, mail ))
    }
    catch(err){
        console.log(err)
        res.status(404).json(err)
    } 
  })

 

 module.exports =  route 