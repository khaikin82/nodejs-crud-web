const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "34.173.83.207",
  user: "cruduser",
  password: "crudpass",
  database: "node_crud",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

connection.query(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )
`,
  (err) => {
    if (err) throw err;
    console.log("Table users is ready.");
  }
);

module.exports = connection;
