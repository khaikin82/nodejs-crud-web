const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "10.128.0.9",
  user: "cruduser",
  password: "crudpass",
  database: "node_crud",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

module.exports = connection;
