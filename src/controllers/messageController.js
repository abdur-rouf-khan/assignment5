exports.createmess = async (req,res)=>{
    res.status(200).json({status: "success",data: "message send successfully"})
}
exports.readmess = async (req,res) =>{
    res.status(200).json({status: "success",data: "message read successfully"})
}
exports.updatemess = async (req,res)=>{
    res.status(200).json({status: "success", data: "update message success"})
}
exports.deletemess = async (req,res)=>{
    res.status(200).json({status: "message delete successfully"})
}