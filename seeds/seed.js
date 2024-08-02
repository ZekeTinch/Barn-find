const sequelize = require('../config/connection');
const { User, Car } = require('../models');

const userData = require('./userData.json');
const carData = require('./carData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const cars = await Car.bulkCreate(carData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
