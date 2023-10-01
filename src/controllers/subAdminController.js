exports.createsubAdmin = async (req,res)=>{
    res.status(200).json({status: "success",data: "create sub admin successfully"})
}
exports.readsubAdmin = async (req,res) =>{
    res.status(200).json({status: "success",data: "sub admin read successfully"})
}
exports.updatesubAdmin = async (req,res)=>{
    res.status(200).json({status: "success", data: "update sub admin success"})
}
exports.deletesubAdmin = async (req,res)=>{
    res.status(200).json({status: "sub admin delete successfully"})
}