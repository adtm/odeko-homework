import { Request, Response } from 'express'

// TODO: to implement
const likePosts = async (req: Request, res: Response) => {
  const user = req.get("X-User")
  if (!user) {
    return res.send("'X-User' header is missing").status(403)
  }

  const _ = req.body.postIds
  return res.status(201).end();
}

export default {
  likePosts
}
