const express = require('express');
const adminController = require("../controllers/adminController");
const postController = require("../controllers/postController");
const subAdminController = require("../controllers/subAdminController");
const userController = require("../controllers/userController");
const router = express.Router();









//admin Controller
router.get("/admincreate",adminController.createadmin);
router.get("/adminread",adminController.readadmin);
router.get("/adminupdate",adminController.updateadmin);
router.get("/admindelete",adminController.deleteadmin);
//=============================================
//post Controller
router.get("/createpost",postController.createpost);
router.get("/readpost",postController.readpost);
router.get("/updatepost",postController.updatepost);
router.get("/deletepost",postController.deletepost);
//=============================================
//sub admin Controller
router.get("/createsubadmin",subAdminController.createsubAdmin);
router.get("/readsubadmin",subAdminController.readsubAdmin);
router.get("/updatesubadmin",subAdminController.updatesubAdmin);
router.get("/deletesubadmin",subAdminController.deletesubAdmin);
//=============================================
//user Controller
router.get("/createuser",userController.createuser);
router.get("/readuser",userController.readuser);
router.get("/updateuser",userController.updateuser);
router.get("/deleteuser",userController.deleteuser);
//===============================



module.exports=router;