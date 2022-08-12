import { Request, Response } from 'express'

// TODO: to implement
const getStreaks = async (_: Request, res: Response) => {
  return res.send({ streaks: []}).status(200)
}

// TODO: to implement
const getMostLiked = async (_: Request, res: Response) => {
  return res.send({ liked: [] }).status(200)
}

export default {
  getStreaks,
  getMostLiked
}
