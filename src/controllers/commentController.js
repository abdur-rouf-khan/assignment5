exports.createcomm = async (req,res)=>{
    res.status(200).json({status: "success",data: "comment successfully"})
}
exports.readcomm = async (req,res) =>{
    res.status(200).json({status: "success",data: "comment read successfully"})
}
exports.updatecomm = async (req,res)=>{
    res.status(200).json({status: "success", data: "update comment success"})
}
exports.deletecomm = async (req,res)=>{
    res.status(200).json({status: "comment delete successfully"})
}