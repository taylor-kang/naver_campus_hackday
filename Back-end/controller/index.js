const path = require('path');
const db = require(path.join(__dirname, '..', 'models'));
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getUsers = async (ctx, id) => {
  const users = await db.User.findAll({
    where: {
      user_id: id
    }
  });
  ctx.body = users;
}

const getSeller = async (ctx, id) => {
  const seller = await db.Seller.findOne({
    where: {
      seller_id: id
    }
  });
  ctx.body = seller;
}

const getOrders = async (ctx, id) => {
const getOrders = async (ctx, id, page, status, startDate, endDate) => {
  // let pageSize = 5;
  // let offset = (page-1) * pageSize;
  // let limit = offset + pageSize;   // number of records per page
  const statusWord = ['결제완료', '결제중', '배송중', '배송완료', '구매확정'];
  var statusWhereObj = (status == null ? {} : {status: statusWord[status]});
  var startDateWhereObj = (startDate == null ? {} : {'$orders.date$': {[Op.gte]: startDate}});
  var endDateWhereObj = (endDate == null ? {} : {'$orders.date$': {[Op.lte]: endDate}});

  const orders = await db.User.findAll({
    include: {
      model: db.Order,
      include: [
        {
          model: db.Item,
          where: statusWhereObj
        },
        db.Seller
      ],
    },
    where: [
      {user_id: id},
      startDateWhereObj,
      endDateWhereObj
    ],
    order: [
      [db.Order, 'date', 'desc']
    ]
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
  getSeller,
  getOrders,
  getOrderById
}