import {QueryError} from 'mysql2';

import mysql from '../db/mysql'
import errors from '../errors/errors';

const insertLikes = async (user: string, postIds: string[]) => {
  const likeValueStat = postIds.map(postId => (
    `(${postId}, "${user}")`
  ))

  try {
    await mysql.query(`INSERT INTO likes(postId, user) VALUES ${likeValueStat}`)
  } catch (err) {
    throw returnExceptionByMySQLCode(err as QueryError);
  }
} 

const returnExceptionByMySQLCode = (err: QueryError) => {
  // Duplicate entry per PK
  if (err.errno == 1062) {
    return new Error(errors.DUPLICATE_RECORD)
  }
  return new Error(errors.UNEXPECTED_ERROR)
}

export default {
  insertLikes
}
