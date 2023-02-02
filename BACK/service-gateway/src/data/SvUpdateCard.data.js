export class SvUpdateCard {
    constructor({ cardService }) {
        this.cardService = cardService
    }

    async execute({ id }, { titulo, conteudo, lista }) {
        const response = await this.cardService.UpdateCard({
            card: { id, titulo, conteudo, lista },
        })

        if (response.error) {
            return { error: response.error }
        }

        return {
            data: response,
        }
    }
}
