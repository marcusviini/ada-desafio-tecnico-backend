export class DeleteCardImplementation {
  constructor({ dbDeleteCard }) {
    this.dbDeleteCard = dbDeleteCard
  }

  async handle(call) {
    try {
      const response = await this.dbDeleteCard.execute(call.request)

      if (response.error)
        return {
          error: response.error,
        }

      return response
    } catch (error) {
      console.log(error)

      return {
        error:
          'Ocorreu um problema interno, tente novamente ou fale com o suporte',
      }
    }
  }
}
