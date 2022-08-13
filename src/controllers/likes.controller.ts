import { Request, Response } from 'express'

import likesModel from '../models/likes.model'
import { weekdayToString } from '../utils/date.formatter'
import errors from '../errors/errors'

// TODO: to implement
const getStreaks = async (_: Request, res: Response) => {
  return res.send({ streaks: []}).status(200)
}

const getMostLikedWeekdaysWithCount = async (_: Request, res: Response) => {
  try {
    const response = await likesModel.getMostLikedWeekdaysWithCount();
    const formattedResponse = response.map(({count, weekday}) => ({
      count, day: weekdayToString(weekday)
    }))

    return res.send(formattedResponse).status(200)
  } catch (err) {
    return errors.sendResponseError(err, res);
  }
}

export default {
  getStreaks,
  getMostLikedWeekdaysWithCount
}
