const path = require('path');
const db = require(path.join(__dirname, '..', 'models'));

const getUsers = async (ctx, id) => {
  const users = await db.User.findAll({
    where: {
      user_id: id
    }
  });
  ctx.body = users;
}

const getOrders = async (ctx, id) => {
  const orders = await db.User.findAll({
    include: {
      model: db.Order,
      include: [db.Item, db.Seller]
    },
    where: {
      user_id: id
    }
  });
  ctx.body = orders;
}

const getOrderById = async (ctx, id) => {
  const orders = await db.Order.findAll({
    include: [
      {
        model: db.Item,
        include: [
          {
          model: db.Delivery
          }
        ]
      },
      {
        model: db.Seller,
      },
      {
        model: db.User,
      }
    ],
    where: {
      id: id
    }
  });
  ctx.body = orders;
}

module.exports = {
  getUsers,
  getOrders,
  getOrderById
}