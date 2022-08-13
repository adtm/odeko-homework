import { RowDataPacket } from 'mysql2'

export interface MySQLCountsByDayResponse extends RowDataPacket {
  count: number;
  weekday: number;
}
