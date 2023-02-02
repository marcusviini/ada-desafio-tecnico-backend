export class LoginController {
    constructor({ svLogin }) {
        this.svLogin = svLogin
    }

    async handle(httpRequest) {
        try {
            const response = await this.svLogin.execute(httpRequest.body)

            if (response.error) {
                return {
                    status: 400,

                    data: { error: response.error },
                }
            }

            return {
                status: 200,

                data: response.data,
            }
        } catch (error) {
            console.log(error)
            return {
                status: 500,

                data: 'Ocorreu um problema interno, tente novamente ou fale com o suporte',
            }
        }
    }
}
