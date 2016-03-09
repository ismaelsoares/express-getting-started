import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize('testdb', 'testuser', 'testpass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName])
    db[modelName].associate(db);

  module.exports[modelName] = db[modelName];
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
