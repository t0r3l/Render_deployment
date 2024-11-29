const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgresql://t0r3l:x92xJ0HEnNex5HxzAxak5weirpaTggOL@dpg-ct4uoj1opnds73d4h6ig-a/db1_i7b5', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
