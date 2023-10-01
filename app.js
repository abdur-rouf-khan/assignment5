const  express = require('express');
const app = new express();
const routes = require('./src/routes/api');
//=================================================
//security middleware
//==========================================
const hpp = require("hpp");
//const  validator = require("validator")
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

//==================================
//security middleware implement
//=========================================
app.use(helmet());
app.use(hpp());
//app.use(validator());
app.use(mongoSanitize());
app.use(cors());

//===============================
//requesting rate limiting
//==============================================

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use('/api',routes);

//undefiend
app.use('/*',function (req,res){
    res.status(404).json({status: "faild",data: "page not found"})
});
//==================================





module.exports=app;