var config = require('../config.json');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.DATABASE_URI);


var menu = sequelize.define('Menu', {
  restaurant : {
    type : Sequelize.STRING,
    allowNull: false
  },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  mealtime : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  price : Sequelize.INTEGER,
  date : {
    type : Sequelize.DATE,
    allowNull : false
  }
});

