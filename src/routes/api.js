const express = require('express');
const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");
const messageController = require("../controllers/messageController");
const router = express.Router();









//blogController
router.get("/blogcreate",blogController.createblog);
router.get("/blogread",blogController.readblog);
router.get("/blogupdate",blogController.updateblog);
router.get("/blogdelete",blogController.deleteblog);
//=============================================
//commentController
router.get("/createcomm",commentController.createcomm);
router.get("/readcomm",commentController.readcomm);
router.get("/updatecomm",commentController.updatecomm);
router.get("/deletecomm",commentController.deletecomm);
//=============================================
//messageController
router.get("/createmess",messageController.createmess);
router.get("/reademess",messageController.readmess);
router.get("/updatemess",messageController.updatemess);
router.get("/deletemess",messageController.deletemess);
//=============================================
//portfolioController
router.get("/creatport",portfolioController.createport);
router.get("/readport",portfolioController.readport);
router.get("/updateport",portfolioController.updateport);
router.get("/deleteport",portfolioController.deleteport);
//===================================
//messageController
router.get("/createpro",productController.createpro);
router.get("/readpro",productController.readpro);
router.get("/updatepro",productController.updatepro);
router.get("/deletepro",productController.deletepro);

//=============================================



module.exports=router;