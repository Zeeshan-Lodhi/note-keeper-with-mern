//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";
const MONGOOSE_URI
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGOOSE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
