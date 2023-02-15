import createModel from "../../db/model/create/create.model.js";

export async function createCreateService(data) {
  try {
    const create = await createModel.create(data);
    return create;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function getCreateByQueryService(query) {
  try {
    const get = await createModel.find(query);
    return get;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteCreateByQueryService(query) {
  try {
    const deleted = await createModel.deleteOne(query);
    return deleted;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
