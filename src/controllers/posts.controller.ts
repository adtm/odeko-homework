import { Request, Response } from 'express'

import likesModel from '../models/likes.model'
import errors from '../errors/errors'

const likePosts = async (req: Request, res: Response) => {
  const user = req.get("X-User")
  if (!user) {
    return res.send(errors.MISSING_USER_HEADER).status(403)
  }

  try {
    await likesModel.insertLikes(user, req.body.postIds)
    return res.status(201).end();
  } catch (err) {
    return errors.sendResponseError(err, res);
  }
}

export default {
  likePosts
}
