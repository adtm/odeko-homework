import { RowDataPacket } from 'mysql2'

export interface MySQLMaximumCountsByWeekdayResponse extends RowDataPacket {
  count: number;
  weekday: number;
}

export interface MySQLCountsByDayResponse extends RowDataPacket {
  count: number;
  date: string;
}
