export class DbCreateCard {
  constructor({ cardRepository }) {
    this.cardRepository = cardRepository
  }

  async execute({ titulo, conteudo, lista }) {
    const findCard = await this.cardRepository.findByTitulo({ titulo, lista })

    if (findCard) {
      return {
        error: 'Ja existe um card com esse titulo nessa lista',
      }
    }

    const card = await this.cardRepository.create({ titulo, conteudo, lista })

    return {
      message: 'Card criado com sucesso!',
      card: {
        titulo,
        conteudo,
        lista,
        id: card.id,
      },
    }
  }
}
