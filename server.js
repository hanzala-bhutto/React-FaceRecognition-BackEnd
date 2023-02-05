const express = require('express');
const bordyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
require('dotenv').config();

const app = express();
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const image = require('./controllers/image');


const db = knex({
    client: process.env.client,
    connection : {
        host:process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
})

app.use(bordyParser.json());
app.use(cors());

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)});
app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)});
app.put('/image', (req,res) => {image.handleImage(req,res,db)});
app.put('/imageurl', (req,res) => {image.handleApiCall(req,res)});

app.listen(process.env.SERVPORT, ()=>{
    console.log(`Server has started at port ${process.env.SERVPORT}`);
});

/*
res = this is working
signin --> post
register --> post = user
/profile/:userId --> GET = user
/image --> Put --> user
*/