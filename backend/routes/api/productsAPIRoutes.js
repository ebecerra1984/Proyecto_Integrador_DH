const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');


router.get('/', productsAPIController.list);

router.get('/cats', productsAPIController.totalByCategory);

router.get('/prod/:id', productsAPIController.listByCategory);

router.get('/:id', productsAPIController.detail);


module.exports = router;