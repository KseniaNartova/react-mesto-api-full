require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const { handlerError } = require('./middlewares/handlerError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');

const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
});
app.use(express.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(handlerError);

app.listen(PORT);
