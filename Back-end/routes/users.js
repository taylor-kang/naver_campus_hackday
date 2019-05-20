var express = require('express');
var router = express.Router();
const path = require('path')
const db = require(path.join(__dirname, '..', 'controller'));

/* GET users listing. */
router.get('/:user_id', async function(req, res, next) {
  const user = {};
  await db.getUsers(user, req.params.user_id);
  res.send(user);
});

module.exports = router;
