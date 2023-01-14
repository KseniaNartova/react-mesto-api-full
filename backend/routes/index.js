const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');
const users = require('./user');
const cards = require('./card');
const { createUser, login } = require('../controller/user');
const auth = require('../middlewares/auth');
const { loginValidator, createUserValidator } = require('../middlewares/validation');

router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);
router.use(auth);
router.use('/users', users);
router.use('/cards', cards);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Cтраницa не существует'));
});

module.exports = router;
