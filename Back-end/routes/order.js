var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET items in order listing. */
router.get('/:order_id', async function(req, res, next) {
    const order = {};
    await db.getOrderById(order, req.params.order_id);
    res.send(order);
});

module.exports = router;
