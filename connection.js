const mongoose = require("mongoose");


async function connectMongoDb(){
    return mongoose.connect("mongodb://127.0.0.1:27017/project-1")
}


module.exports = {
    connectMongoDb
}