const router = require('express').Router();

const Shop = require('../controller/shopController');

const autentikasi = require('../middlewares/authenticate');
const checkRole = require('../middlewares/checkRole');
const checkId = require('../middlewares/checkId');
const checkOwnership = require('../middlewares/checkOwnership');

// router.post("/", Shop.createShop);
router.get('/', Shop.findShops);
router.get('/:id', checkId, autentikasi, checkOwnership, Shop.findShopById);
router.patch(
  '/:id',
  checkId,
  autentikasi,
  checkOwnership,
  checkRole('Owner'),
  Shop.updateShop
);
// router.delete('/:id', Shop.deleteShop);

module.exports = router;
