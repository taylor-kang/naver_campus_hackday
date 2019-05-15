const path = require('path');
const db = require(path.join(__dirname, '..', 'models'));

const getUsers = async (ctx) => {
  const users = await db.User.findAll();
  ctx.body = users;
}

const getOrders = async (ctx, id) => {
  const orders = await db.User.findAll({
    include: {
      model: db.Order,
      include: [db.Item,db.Seller]
    },
    where: {
      user_id: id
    }
  });
  ctx.body = orders;
}

module.exports = {
  getUsers,
  getOrders,
}