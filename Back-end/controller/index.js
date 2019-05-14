const path = require('path');
const db = require(path.join(__dirname, '..', 'models'));

const getUsers = async (ctx) => {
  const users = await db.User.findAll();
  ctx.body = users;
}

module.exports = {
  getUsers,
}