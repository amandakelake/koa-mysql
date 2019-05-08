const router = require('koa-router')()
const UserController = require('../controllers/user');

router.prefix('/users')

router.post('/register', UserController.create);
router.post('/login', UserController.login);
router.delete('/delete/:id', UserController.delete);
router.get('/info', UserController.info);
router.get('/list', UserController.list);

module.exports = router
