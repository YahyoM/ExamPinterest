import Joi from "joi";

export default Joi.object({
  name: Joi.string().required(),
  pic: Joi.string().required(),
});
