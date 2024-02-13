import mongoose from "mongoose";

export async function mongodbConnect() {
    // if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo Connection successfully established.");
    } catch (err) {
        throw new Error("Error connecting to Mongoose", err);
    }
}
