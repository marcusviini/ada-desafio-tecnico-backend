import { Sequelize } from 'sequelize'

import databaseConfig from '../../main/config/database'

import Card from './models/Card'

const models = [Card]

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig)

    this.init()
  }

  init() {
    models.map((model) => {
      model.init(this.connection)
    })

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    )
  }
}

export default new Database()
