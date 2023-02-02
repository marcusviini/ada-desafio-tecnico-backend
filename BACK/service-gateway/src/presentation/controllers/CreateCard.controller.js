export class CreateCardController {
    constructor({ svCreateCard }) {
        this.svCreateCard = svCreateCard
    }

    async handle(httpRequest) {
        try {
            const response = await this.svCreateCard.execute(httpRequest.body)

            if (response.error) {
                return {
                    status: 400,

                    data: { error: response.error },
                }
            }

            return {
                status: 201,

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
