const mongoose = require('mongoose');
const DB ="mongodb+srv://logindetail:N9icvlfUCQmBcrAd@cluster0.q0ugi2y.mongodb.net/";
const mongodb = async(req,res)=>{

    try {
        await mongoose.connect(DB);
        console.log("connected");

    } catch (error) {
        console.log("not able connected",error);
    }
}

module.exports = mongodb;