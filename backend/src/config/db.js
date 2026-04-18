import mongoose from "mongoose"

export const connectDB = async() => {
try {
    await mongoose.connect("process.env.MONGO_URI")
    console.log("CONNECTED DB")
} catch (error) {
    console.error("Failed to connect DB ", error)
    process.exit(1) //exit with failure
}
}