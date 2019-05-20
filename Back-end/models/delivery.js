module.exports = (sequelize, DataTypes) => {
    return sequelize.define('delivery', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        reg_date: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        pick_date: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        complete_date: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
};