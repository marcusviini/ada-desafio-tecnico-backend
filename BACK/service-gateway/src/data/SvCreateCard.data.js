export class SvCreateCard {
    constructor({ cardService }) {
        this.cardService = cardService
    }

    async execute({ titulo, conteudo, lista }) {
        const response = await this.cardService.CreateCard({
            titulo,
            conteudo,
            lista,
        })

        if (response.error) {
            return { error: response.error }
        }

        return {
            data: response,
        }
    }
}
