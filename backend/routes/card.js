const router = require('express').Router();
const {
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controller/card');
const {
  createCardValidator,
  deleteCardValidator,
} = require('../middlewares/validation');

router.get('/', getCard);
router.post('/', createCardValidator, createCard);
router.delete('/:cardId', deleteCardValidator, deleteCard);
router.put('/:cardId/likes', deleteCardValidator, likeCard);
router.delete('/:cardId/likes', deleteCardValidator, dislikeCard);

module.exports = router;
