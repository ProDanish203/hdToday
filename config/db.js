import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;
if(!mongoUrl) throw new Error("Please provide valid database connection string");

let cached = global.mongoose;
if(!cached){
    cached = global.mongoose = {conn: null, promise: null};
}

const dbConn = async () => {

    if(cached.conn) return cached.conn;

    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(mongoUrl, opts).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConn;