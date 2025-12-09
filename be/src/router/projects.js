const router = require('express').Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get(
    '/',
    projectController.getAll
);

router.get(
    '/:id',
    projectController.getOne
);

router.post(
    '/',
    authMiddleware,
    projectController.create
);

router.put(
    '/:id',
    authMiddleware,
    projectController.update
);

router.delete(
    '/:id',
    authMiddleware,
    projectController.remove
);

module.exports = router;