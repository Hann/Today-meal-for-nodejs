var config = require('../config.json');

var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.DATABASE_URI);


var menu = sequelize.define('Menu', {
  restaurant : Sequelize.STRING,
  name : Sequelize.STRING,
  mealtime : Sequelize.INTEGER,
  price : {
    type : Sequelize.INTEGER,
    allowNull : true
  },
  date : Sequelize.DATE
});

