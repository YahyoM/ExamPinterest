import {
  createCreateService,
  deleteCreateByQueryService,
  getCreateByQueryService,
} from "../../../common/service/create/create.service.js";

export async function createGetHandler(request, response) {
  try {
    const data = request.body;
    const res = await getCreateByQueryService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function createCreateHandler(request, response) {
  try {
    const data = request.body;
    const res = await createCreateService(data);
    return response.json({
      status: 200,
      message: "Ok",
      data: res,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

export async function createDeleteHandler(request, response) {
  try {
    const data = request.body;
    const deleted = await deleteCreateByQueryService(data);
    return response.json({
      status: 200,
      message: "ok",
      data: deleted,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}

