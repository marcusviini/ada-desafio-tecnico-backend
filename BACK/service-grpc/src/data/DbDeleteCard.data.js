export class DbDeleteCard {
  constructor({ cardRepository }) {
    this.cardRepository = cardRepository
  }

  async execute({ id, titulo, conteudo, lista }) {
    const findCard = await this.cardRepository.findById({ id })

    if (!findCard) {
      return {
        error: 'Card não encontrado',
      }
    }

    await this.cardRepository.delete({ id })

    const cards = await this.cardRepository.findAll({})

    return {
      message: 'Card deletado com sucesso!',
      cards,
    }
  }
}
