var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen('3000',()=>{
	console.log('server is running');
})


// Database Connectivity

var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'task-1-register'
});

// check the database connecction


db.connect((err)=>{
	if(err) throw err;
	else {
		console.log('db connect successfuly')
	}
});


// api connect 

app.get('/api',(req,res)=>{
	res.send('api working')
});

// create data

app.post('/api/insert',(req,res)=>{
	

	let sql =`insert into table1 (fname,lname,email,phone,age,gender,address,pass,cpass)
			values(
			'${req.body.fname}',
			'${req.body.lname}',
			'${req.body.email}',
			'${req.body.phone}',
			'${req.body.age}',
			'${req.body.gender}',
			'${req.body.address}',
			'${req.body.pass}',
			'${req.body.cpass}'
			)`;
	db.query(sql,(err,result)=>{
		if (err) throw err;
		res.send('data inserted');
	
	});
});

// Get All data

app.get('/api/read',(req,res)=>{
	let sql = `select * from table1  `;
	db.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result);
	
	});
});

// Get Specific Login Details

app.get('/api/single',(req,res)=>{
	let sql = `select * from table1 where email='${req.body.email}' and pass='${req.body.pass}'`;
	db.query(sql,(err,result)=>{
		if (err) throw err;
		res.send('data have in the database');
	});
});

// Update Single data

app.put('/api/update',(req,res)=>{
	let sql = ``;
	
});