import mysql2 from 'mysql2/promise'

// const config = {
//   host: '127.0.0.2',
//   user: 'root',
//   password: 'admin',
//   database: 'mydb'
// }

// export const connection = await mysql2.createConnection(config)

export const connection = await mysql2.createPool({
  host: '127.0.0.2',
  user: 'root',
  password: 'admin',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  idleTimeout: 60000,
  enableKeepAlive: true
})
