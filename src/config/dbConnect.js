import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

let db = mongoose.connection;

export default db;