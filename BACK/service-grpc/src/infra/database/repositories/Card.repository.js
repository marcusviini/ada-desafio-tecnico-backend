import { Card } from '../models/Card'

export class CardRepository {
  async create({ titulo, conteudo, lista }) {
    return await Card.create({
      titulo,
      conteudo,
      lista,
    })
  }

  async findByTitulo({ titulo, lista }) {
    return await Card.findOne({
      where: {
        titulo,
        lista,
      },
    })
  }

  async findById({ id }) {
    return await Card.findOne({
      where: {
        id,
      },
    })
  }

  async findAllByLista({ lista }) {
    return await Card.findAll({
      where: {
        lista,
      },
    })
  }

  async findAll() {
    return await Card.findAll({})
  }

  async update({ id, titulo, conteudo, lista }) {
    const card = await Card.findOne({
      where: {
        id,
      },
    })

    card.update({
      titulo,
      conteudo,
      lista,
    })

    return card
  }

  async delete({ id }) {
    await Card.destroy({ where: { id } })
  }
}
