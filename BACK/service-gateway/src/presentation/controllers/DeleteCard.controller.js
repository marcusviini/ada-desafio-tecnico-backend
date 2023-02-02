export class DeleteCardController {
    constructor({ svDeleteCard }) {
        this.svDeleteCard = svDeleteCard
    }

    async handle(httpRequest) {
        try {
            const response = await this.svDeleteCard.execute(httpRequest.params)

            if (response.error) {
                return {
                    status: 404,

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
