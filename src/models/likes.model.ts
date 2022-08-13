import { QueryError } from 'mysql2';

import mysql from '../db/mysql'
import errors from '../errors/errors';
import { MySQLCountsByDayResponse , MySQLMaximumCountsByWeekdayResponse} from '../types/mysql';

const insertLikes = async (user: string, postIds: string[]) => {
  const likeValueStat = postIds.map(postId => (
    `(${postId}, "${user}")`
  ))

  try {
    await mysql.query(`INSERT INTO likes(postId, user) VALUES ${likeValueStat}`)
  } catch (err) {
    throw exceptionByErrorCode(err as QueryError);
  }
}

const getMostLikedWeekdaysWithCount = async () => {
  try {
    const [response] = await mysql.query<Array<MySQLMaximumCountsByWeekdayResponse>>(`
      SELECT COUNT(*) as count, WEEKDAY(date) AS weekday
      FROM likes
      GROUP BY weekday
      HAVING count = ( 
        SELECT MAX(count) FROM (SELECT COUNT(*) AS count, WEEKDAY(date) AS weekday FROM likes GROUP BY weekday) as count_table
      )
      ORDER BY weekday ASC;
    `)
    return response;
  } catch (err) {
    throw exceptionByErrorCode(err as QueryError);
  }
}

const getDaysWithCount = async () => {
  try {
    const [response] = await mysql.query<Array<MySQLCountsByDayResponse>>(`
      SELECT COUNT(*) as count, DATE_FORMAT(date, '%Y-%m-%d') as day
      FROM likes
      GROUP BY day
      ORDER BY day ASC;
    `)
    return response;
  } catch (err) {
    throw exceptionByErrorCode(err as QueryError);
  }
}

const exceptionByErrorCode = (err: QueryError) => {
  // Duplicate entry per PK
  if (err.errno == 1062) {
    return new Error(errors.DUPLICATE_RECORD)
  }
  return new Error(errors.UNEXPECTED_ERROR)
}

export default {
  insertLikes,
  getDaysWithCount,
  getMostLikedWeekdaysWithCount
}
