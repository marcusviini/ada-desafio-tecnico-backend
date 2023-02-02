export class DbUpdateCard {
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

    await this.cardRepository.update({ id, titulo, conteudo, lista })

    return {
      message: 'Card atualizado com sucesso!',
      card: {
        titulo,
        conteudo,
        lista,
        id,
      },
    }
  }
}
