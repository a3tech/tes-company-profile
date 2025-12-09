const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1/auth', require('../src/router/auth'));
app.use('/v1/articles', require('../src/router/articles'));
app.use('/v1/projects', require('../src/router/projects'));

// health
app.get('/health', (req,res) => res.json({ ok: true }));

module.exports = app;