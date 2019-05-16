var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET orders listing. */
router.get('/:user_id', async function(req, res, next) {
  const orders = {};
  let page = (req.query.page)? req.query.page : 1;
  let status = (req.query.status)? req.query.status : null;
  let startDate = (req.query.startDate)? req.query.startDate : null;
  let endDate = (req.query.endDate)? req.query.endDate : null;

  await db.getOrders(orders, req.params.user_id, page, status, startDate, endDate);
  res.send(orders);

});

/* GET items in order listing. */
router.get('/:order_id', async function(req, res, next) {
  const order = {};
  await db.getOrderById(order, req.params.order_id);
  res.send(order);
});

module.exports = router;
