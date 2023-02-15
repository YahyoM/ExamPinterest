import mongoose from "mongoose";

export const FileUploadSchema = new mongoose.Schema({
  name: String,
  author: String,
});

export default mongoose.model("FILEUPLOAD", FileUploadSchema);
