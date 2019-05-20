var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET seller listing. */
router.get('/:seller_id', async function(req, res, next) {
  const seller = {};
  await db.getSeller(seller, req.params.seller_id);
  res.send(seller);
});

module.exports = router;
