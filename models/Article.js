module.exports = function (sequelize, DataTypes) {
    var Article = sequelize.define("Article", {
        // Giving the user model a name of type STRING
        header: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Article;
};