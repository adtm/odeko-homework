import { Request, Response } from 'express'

const errors = {
  DUPLICATE_RECORD: "One or more records already exist.",
  UNEXPECTED_ERROR: "Unexpected error, please try again later.",
  MISSING_USER_HEADER: "'X-User' header is missing",
}

const errorToCode = (err: Error) => {
  switch (err.message) {
    case errors.DUPLICATE_RECORD:
      return 409;
    default:
      return 500;
  }
}

const sendResponseError = (err: unknown, res: Response) => {
  if (err instanceof Error) {
    return res.send(err.message).status(errorToCode(err));
  }
  return res.send(errors.UNEXPECTED_ERROR).status(500);
}

export default {
  ...errors,
  sendResponseError
}
