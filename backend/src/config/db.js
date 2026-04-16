import mongoose from "mongoose"

export const connectDB = async() => {
try {
    await mongoose.connect("REMOVED/?appName=Cluster0")
    console.log("CONNECTED DB")
} catch (error) {
    console.error("Failed to connect DB ", error)
    process.exit(1) //exit with failure
}
}