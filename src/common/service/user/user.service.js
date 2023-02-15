import userModel from "../../db/model/user/user.model.js";
import sha256 from "sha256";

export async function loginService(data) {
  try {
    let password = sha256(data.password);
    const login = await userModel.findOne({
      password: password,
      email: data.email,
    });
    return login;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function createUserService(data) {
  try {
    const create = await userModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteUserByQueryService(query) {
  try {
    const deleted = await userModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUserByQueryService(query) {
  try {
    const updated = await userModel.updateOne(query);
    return updated;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
