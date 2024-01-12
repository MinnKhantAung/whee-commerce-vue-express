import mongoose from "mongoose";

export const connectDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECTION);
        console.log('DB is connected at '+ connect.connection.host);
    } catch (error) {
        console.log('Error occoured while connectiong db:' +error);       
    }
} 