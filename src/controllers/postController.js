exports.createpost = async (req,res)=>{
    res.status(200).json({status: "success",data: "post  successfully"})
}
exports.readpost = async (req,res) =>{
    res.status(200).json({status: "success",data: "post read successfully"})
}
exports.updatepost = async (req,res)=>{
    res.status(200).json({status: "success", data: "update post success"})
}
exports.deletepost = async (req,res)=>{
    res.status(200).json({status: "post delete successfully"})
}