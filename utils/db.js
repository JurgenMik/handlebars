// setup database connection
const mysql = require('mysql');

// täpsustame millise andmebaasiga on tegu
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
    // here you can set conncetion limits
});

module.exports = db;