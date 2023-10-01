exports.createadmin = async (req,res)=>{
    res.status(200).json({status: "success",data: "create admin successfully"})
}
exports.readadmin = async (req,res) =>{
    res.status(200).json({status: "success",data: "admin read successfully"})
}
exports.updateadmin = async (req,res)=>{
    res.status(200).json({status: "success", data: "update admin success"})
}
exports.deleteadmin = async (req,res)=>{
    res.status(200).json({status: "admin delete successfully"})
}