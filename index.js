const express = require('express')
const mysql = require('mysql2')
require('dotenv').config();


const app = express()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
  
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database! :)");
    const sql = `CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255) )`
    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Table created");
    })
});


// let id = 0;
app.get('/', (req, res) => {
    let name = '';
    
    name += `mamad ${id}`; // This creates the name string
    
    // Use parameterized query to avoid SQL injection
    const sql = `INSERT INTO customers (name) VALUES (?)`;
    connection.query(sql, [name], (err, result) => {
        if (err) throw err;
        console.log("1 record has been inserted!");
    });
    
    // Increment id after the query execution
    // id += 1;

    res.end('ok babe !')
})


app.listen(3000);