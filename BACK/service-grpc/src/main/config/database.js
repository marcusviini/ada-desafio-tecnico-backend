require('dotenv').config()

const database = {
  db: {
    dialect: process.env.DB_DIALECT,

    storage: process.env.DB_STORAGE,

    database: process.env.DB_NAME,

    logging: false,
  },

  test: {
    dialect: process.env.DB_DIALECT,

    storage: process.env.DB_STORAGE,

    database: 'test',

    logging: false,
  },
}

module.exports = process.env.NODE_ENV !== 'test' ? database.db : database.test
