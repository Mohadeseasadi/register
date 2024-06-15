const express = require('express');

const mongoose = require('mongoose')

const parser = require('body-parser')

const path = require('path')

const confEnv = require('./config/default')

const client = require('./utils/reddisClient')

const userRouter = require('./router/user-rout')

const app = express()

app.use(express.json())
app.use(parser.urlencoded({extended:true}))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/users/register', (req, res) => {
    res.render('index');
});

app.get('/users/code', (req, res) => {
    res.render('code');
});

app.use('/users',userRouter)

mongoose.connect(confEnv.url)
    .then(client.connect())
    .then(app.listen(confEnv.port))
