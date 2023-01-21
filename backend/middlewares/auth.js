const jwt = require('jsonwebtoken');
const AuthError = require('../errors/AuthError');

const { SECRET_JWT = 'dev-secret' } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? SECRET_JWT : 'dev-secret');
  } catch (err) {
    return next(new AuthError('Необходима авторизация'));
  }
  req.user = payload;

  next();
  return payload;
};
