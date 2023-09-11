exports.createpro = async (req,res)=>{
    res.status(200).json({status: "success",data: "product create successfully"})
}
exports.readpro = async (req,res) =>{
    res.status(200).json({status: "success",data: "product read successfully"})
}
exports.updatepro = async (req,res)=>{
    res.status(200).json({status: "success", data: "update product success"})
}
exports.deletepro = async (req,res)=>{
    res.status(200).json({status: "product delete successfully"})
}