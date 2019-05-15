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

module.exports = db;