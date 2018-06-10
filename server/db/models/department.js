const Sequelize = require('sequelize');

const Department = db.define('department', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  capasity: {
    type: Sequelize.NUMBER,
    validate: {
      min: 0,
      max: 300,
    },
  },
  phoneNumber: Sequelize.STRING,
  location: Sequelize.STRING,
});

module.exports = Department;
