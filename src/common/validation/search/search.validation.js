import Joi from "joi";

export default Joi.object({
  name: Joi.string().min(3).max(30).required(),
  author: Joi.string(),
});
