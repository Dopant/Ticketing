var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties
    host:'localhost',
    user:'root',
    password:'',
    database:'myticketsgh'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
});


/*
connection.query( "create table buslist (id int not null auto_increment  primary key,registry_no varchar(20) unique not null) ",function(error,fields){
    if(error){
        console.log(error)
    }else {
        console.log('Successful query');
    }
});
*/