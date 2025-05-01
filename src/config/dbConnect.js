import mongoose from "mongoose";

async function connectDb() {
    const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP}`

    mongoose.connect(URI);

    return mongoose.connection;
}

export default connectDb;