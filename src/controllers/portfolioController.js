exports.createport = async (req,res)=>{
    res.status(200).json({status: "success",data: "create portfolio successfully"})
}
exports.readport = async (req,res) =>{
    res.status(200).json({status: "success",data: "portfolio read successfully"})
}
exports.updateport = async (req,res)=>{
    res.status(200).json({status: "success", data: "update portfolio success"})
}
exports.deleteport = async (req,res)=>{
    res.status(200).json({status: "portfolio delete successfully"})
}