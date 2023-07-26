import mysql, { Connection } from 'mysql';
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export const query = (sql: string, values?: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, values, (error, results) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};

export const close = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    pool.end((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
