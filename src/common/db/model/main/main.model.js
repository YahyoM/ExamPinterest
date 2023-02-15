import mongoose from "mongoose";

export const MainSchema = new mongoose.Schema({
  "name": String,
  "pic" : String,
});

 export default mongoose.model("MAIN", MainSchema);
