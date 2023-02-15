import mongoose from "mongoose";

export const FileUploadSchema = new mongoose.Schema({
  image: String,
});

export default mongoose.model("FILEUPLOAD", FileUploadSchema);
