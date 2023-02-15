import createValidationSchema from "../../common/validation/create/create.validation.js";

export async function createValidation(request, response, next) {
  try {
    const value = await createValidationSchema.validateAsync(request.body);
    console.log(value);
    next();
  } catch (err) {
    response.json({
      status: 404,
      message: err.message,
    });
  }
}
