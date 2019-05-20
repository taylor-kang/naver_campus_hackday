module.exports = (sequelize, DataTypes) => {
    return sequelize.define('item', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        option: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        delivery_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
    });
};