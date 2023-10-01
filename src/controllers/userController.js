exports.createuser = async (req,res)=>{
    res.status(200).json({status: "success",data: "created user successfully"})
}
exports.readuser = async (req,res)=>{
    res.status(200).json({status: "success",data: "data user success"})
}
exports.updateuser = async (req,res)=>{
    res.status(200).json({status: "success",data: "user update success"})
}
exports.deleteuser = async (req,res)=>{
    res.status(200).json({status: "success",data: "successfully delete"})
}