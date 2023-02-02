export class DbFindAllCards {
  constructor({ cardRepository }) {
    this.cardRepository = cardRepository
  }

  async execute({}) {
    const cards = await this.cardRepository.findAll()

    if (!cards) {
      return {
        error: 'Nenhum card encontrado',
      }
    }

    return {
      message: 'Consulta realizada com sucesso!',
      cards,
    }
  }
}
