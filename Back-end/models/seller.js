module.exports = (sequelize, DataTypes) => {
    return sequelize.define('seller', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
};