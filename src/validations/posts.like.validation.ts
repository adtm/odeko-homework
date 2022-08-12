import Joi from "joi";

const schema = Joi.object({
  postIds: Joi.array().required(),
});

export default schema;
