const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "<INTERNAL_OR_EXTERNAL_IP_OF_VM2>",
  user: "cruduser",
  password: "crudpass",
  database: "node_crud",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

module.exports = connection;
