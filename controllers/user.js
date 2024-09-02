const UserModel = require('../models/user')

async function handleGetAllUser(req,res){
    const result = await UserModel.find({});
    return res.status(200).json({ msg: "users get successfully", data: result });
}



async function getUserById(req,res){
    const userId = req?.params?.id;
    const result = await UserModel.find({ _id: userId });
    return res.status(200).json({ status: "success", data: result });
}



async function createUser(req,res){
    const body = req.body;
    console.log(body, "body----------");
  
    const result = await UserModel.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    });
  
    console.log(result);
  
    return res.status(201).json({ msg: "user created succefully" });
}



async function updateUser(req,res){
    const userId = req.params.id;
    const body = req.body;
    
    console.log(userId, body)
    
    const result = await UserModel.replaceOne(
      {
        _id: userId,
      },
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      }
    );
    
    return res.status(200).json({status:'success', data:result})
}


async function deleteUserById(req,res){
    const userId =  req.params.id
    const result = await UserModel.deleteOne({_id:userId})
    return res.status(200).json({message:'User Delted Successfully', data:result})
}






module.exports = {
    handleGetAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUserById
}