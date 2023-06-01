module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Uers", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Advertisments;
  };
  