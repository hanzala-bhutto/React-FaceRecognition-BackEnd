const express = require('express');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
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



/*
res = this is working
signin --> post
register --> post = user
/profile/:userId --> GET = user
/image --> Put --> user
*/