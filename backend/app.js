const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { handlerError } = require('./middlewares/handlerError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});
app.use(express.json());
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(handlerError);

app.listen(PORT);
