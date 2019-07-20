module.exports = function (sequelize, DataTypes) {
    var College = sequelize.define("College", {
        // Giving the user model a name of type STRING
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    College.associate = models => {
        College.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return College;
};