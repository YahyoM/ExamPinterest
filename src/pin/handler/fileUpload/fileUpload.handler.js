export async function userCreateHandler(request, response) {
  try {
    const data = request.body;
    const res = await createUserService(data);
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

export async function userDeleteHandler(request, response) {
  try {
    const data = request.body;
    const deleted = await deleteUserByQueryService(data);
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

export async function userUpdateHandler(request, response) {
  try {
    const data = request.body;
    const update = await updateUserByQueryService(data);
    return response.json({
      status: 200,
      message: "OK",
      data: update,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
