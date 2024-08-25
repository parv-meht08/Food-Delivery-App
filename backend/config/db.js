import mongoose, { mongo } from "mongoose";

export const conectDB = async ()=>{
    await mongoose.connect('mongodb+srv://parvmehta:parv_mehta2@cluster0.3db0r6a.mongodb.net/SGP').then(()=>console.log("DB Connected"));
}
