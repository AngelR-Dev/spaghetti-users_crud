const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'userCrud-spagetti',
  username: 'postgres',
  password: 'root',
  port: 5432
})

  module.exports = db