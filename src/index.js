// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening on port ${process.env.POR}`);
    })
})
.catch((err)=>{
    console.log("mondo db connection failed !!!", err);
})





/*
import express from "express"
const app = express();

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("ERRRR! ", error)
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}` )
        })
    } catch(err){
        console.error("ERROR: ", err);
        throw err;  
    }
})()
*/