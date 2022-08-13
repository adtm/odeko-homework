import mysql from 'mysql2/promise';

const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  connectionLimit: 10,
  waitForConnections: true,
});

export default connectionPool; 
