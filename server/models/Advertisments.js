module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Advertisments", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("Mašinos", "Drabužiai", "Nekilnajamas turtas")
    },
    advertismentText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Advertisments;
};
