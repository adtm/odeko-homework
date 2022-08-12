import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const validate = (validationSchema: Joi.Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validationSchema.validate(req.body);
    if (error) {
      const { details } = error;
      res.status(422).send({
        error: details.map(d => d.message)
      })
    }
    return next();
  }
}

export default validate;
