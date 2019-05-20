const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.User = require('./user')(sequelize, Sequelize);
db.Delivery = require('./delivery')(sequelize, Sequelize);
db.Item = require('./item')(sequelize, Sequelize);
db.Order = require('./order')(sequelize, Sequelize);
db.Seller = require('./seller')(sequelize, Sequelize);

// Define Relation
db.User.hasMany(db.Order, {foreignKey: 'user_id'});
db.Seller.hasMany(db.Order, {foreignKey: 'seller_id'});
db.Order.hasMany(db.Item, {foreignKey: 'order_id'});
db.Delivery.hasOne(db.Item, {foreignKey: 'delivery_id'});
db.Order.belongsTo(db.User);   
db.Order.belongsTo(db.Seller);
db.Item.belongsTo(db.Order);
db.Item.belongsTo(db.Delivery);

module.exports = db;