export class DbLogin {
  constructor({ tokenService }) {
    this.tokenService = tokenService
  }

  async execute({ login, senha }) {
    if (
      login !== process.env.APPLICATION_LOGIN ||
      senha !== process.env.APPLICATION_PASSWORD
    ) {
      return {
        error: 'Login ou senha inválidos',
      }
    }

    const token = await this.tokenService.generateToken({ login })

    if (token.error) {
      return {
        error: token.error,
      }
    }

    return {
      message: 'Login realizado com sucesso',
      token: token.token,
    }
  }
}
