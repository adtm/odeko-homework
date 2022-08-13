import { Request, Response } from 'express'

import likesModel from '../models/likes.model'
import { weekdayToString } from '../utils/date.formatter'
import { calculateIncreasingStreaks } from '../utils/streak.counter'
import errors from '../errors/errors'

const getStreaks = async (_: Request, res: Response) => {
  try {
    const response = await likesModel.getDaysWithCount();
    const countsByDate = response.map(({ count, day }) => ({ count, day: new Date(day) }))

    const streaks = calculateIncreasingStreaks(countsByDate)
    return res.send(streaks).status(200)
  } catch (err) {
    return errors.sendResponseError(err, res);
  }
}

const getMostLikedWeekdaysWithCount = async (_: Request, res: Response) => {
  try {
    const response = await likesModel.getMostLikedWeekdaysWithCount();
    const countsWithWeekdays = {
      count: response[0].count,
      weekdays: response.map(({ weekday }) => weekdayToString(weekday))
    }

    return res.send(countsWithWeekdays).status(200)
  } catch (err) {
    return errors.sendResponseError(err, res);
  }
}

export default {
  getStreaks,
  getMostLikedWeekdaysWithCount
}
