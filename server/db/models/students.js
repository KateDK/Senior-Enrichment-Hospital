const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
  firsName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5705671.jpg',
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: { min: 0.0, max: 4.0 },
  },
});

module.exports = Student;
