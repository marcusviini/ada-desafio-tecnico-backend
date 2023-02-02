export class LoginImplementation {
  constructor({ dbLogin }) {
    this.dbLogin = dbLogin
  }

  async handle(call) {
    try {
      const response = await this.dbLogin.execute(call.request.user)

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
