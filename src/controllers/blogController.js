exports.createblog = async (req,res)=>{
    res.status(200).json({status: "success",data: "created data successfully"})
}
exports.readblog = async (req,res)=>{
    res.status(200).json({status: "success",data: "data read success"})
}
exports.updateblog = async (req,res)=>{
    res.status(200).json({status: "success",data: "data update success"})
}
exports.deleteblog = async (req,res)=>{
    res.status(200).json({status: "success",data: "successfully delete"})
}