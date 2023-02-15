import mongoose from "mongoose";

export const CreateSchema = new mongoose.Schema({
  name: String,
  pic: String,
});

export default mongoose.model("CREATE", CreateSchema);
