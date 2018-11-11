const express = require('express');
const mongoose = require('mongoose');
const requireDir=require('require-dir');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect(config.connectionString,{useNewUrlParser:true});

requireDir('./src/models');


app.use('/',require('./src/routes'));
app.listen(3000);