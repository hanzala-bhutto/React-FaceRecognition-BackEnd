const express = require('express');
const bordyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');

const app = require('express');
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection : {
        host:'127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'fast',
        database: 'smart-brain'
    }
})

app.use(bordyParser.json());
app.use(cors());

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)});
app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)});
app.put('/image', (req,res) => {image.handleImage(req,res,db)});
app.put('imageurl', (req,res) => {image.handleApiCall(req,res)});

/*
res = this is working
signin --> post
register --> post = user
/profile/:userId --> GET = user
/image --> Put --> user
*/