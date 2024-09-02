const express = require("express");
    const {handleGetAllUser, getUserById,createUser , updateUser, deleteUserById} = require('../controllers/user')
const router = express.Router()




// create user

router.post("/create",createUser);
  
  // get all user list
  
  router.get("/", handleGetAllUser);
  
  // get user with specfic id
  router.get("/:id", getUserById);
  
  
  
  
  // update user with specfic id
  router.put("/update/:id",updateUser);
  
  
  // Delete user
  
  router.delete('/delete/:id',deleteUserById)


  module.exports = router