const router = require('express').Router();
const articleController = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get(
    '/',
    articleController.getAll
);

router.get(
    '/:id',
    articleController.getOne
);

// protected routes for admin
router.post(
    '/',
    authMiddleware,
    articleController.create
);

router.put(
    '/:id',
    authMiddleware,
    articleController.update
);

router.delete(
    '/:id',
    authMiddleware,
    articleController.remove
);

module.exports = router;