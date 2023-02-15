import fileUpload from "express-fileupload";
import FileUploadModel from "../../db/model/fileUpload/fileUpload.model.js";

export async function fileUploadCreateService(data) {
  try {
    const fileUpload = await FileUploadModel.fileUpload(data);
    return fileUpload;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getFileUploadByQueryService(query) {
  try {
    const get = await FileUploadModel.find(query);
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteFileUploadByQueryService(query) {
  try {
    const deleted = await FileUploadModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateFileUploadByQueryService(query) {
  try {
    const updated = await FileUploadModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
