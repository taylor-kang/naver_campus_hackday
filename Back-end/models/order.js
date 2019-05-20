module.exports = (sequelize, DataTypes) => {
    return sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discount_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pay_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pay_type: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        card_num: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        card_type: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        pay_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        seller_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        delivery_receiver: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        delivery_address: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        delivery_memo: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
};