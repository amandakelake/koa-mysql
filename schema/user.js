module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(100),
            field: 'username',
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            field: 'password',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email',
            allowNull: false
        }
    }, {
        freezeTableName: true
    });
}