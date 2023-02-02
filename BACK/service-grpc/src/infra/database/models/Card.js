import Sequelize, { Model } from 'sequelize'

export class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,

        conteudo: Sequelize.STRING,

        lista: Sequelize.STRING,
      },

      { sequelize }
    )
    return Card
  }
}

export default Card
