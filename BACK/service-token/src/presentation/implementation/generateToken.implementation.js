export class GenerateTokenImplementation {
    constructor({ dbGenerateToken }) {
        this.dbGenerateToken = dbGenerateToken
    }

    async handle(call) {
        try {
            const response = await this.dbGenerateToken.generateToken(
                call.request
            )

            if (response.error) {
                return { error: response.error }
            }

            return {
                token: response.token,
            }
        } catch (error) {
            console.log(error)
            return {
                error: 'Ocorreu um problema interno, tente novamente ou fale com o suporte',
            }
        }
    }
}
