require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
  logoutUser
} = require('./controllers/authController');
const {
  getLists,
  createList
} = require('./controllers/listController');
const {
  handleOpen
} = require('./mongo/utils');

const app = express();

mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', e => console.log('Mongoose Error', e));
db.once('open', handleOpen);

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
  },
  secret: process.env.SESSION_SECRET,
}))

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.get('/api/user', getUser);
app.get('/api/logout', logoutUser);

app.get('/api/lists/:_id', getLists)
app.post('/api/lists', createList)

app.listen(5050, () => console.log('Listening on Port 5050'));
