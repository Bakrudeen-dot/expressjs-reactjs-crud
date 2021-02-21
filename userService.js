const express= require('express');
var mysql=require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bakru",
    database: "employee_details"
  });
 var router=express.Router();
 
 router.get('/list', function(req, res) {
    let mysql = `SELECT * FROM employee_details.employees`;
    con.query(mysql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        data,
        message: "User lists retrieved successfully"
      })
    })
  });
  router.get('/add', function(req, res) {
    let mysql = `INSERT INTO employee_details.employees (name,sex,age,date_of_birth) VALUES ('siva', 'male','21','2000')`;
    con.query(mysql, function(err, data, fields) {
      if (err) throw err;
      res.json({
        status:500 ,
        data,
        message: " successfully insert"
      })
    })
  });
   module.exports=router;