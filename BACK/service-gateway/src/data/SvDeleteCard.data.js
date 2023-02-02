export class SvDeleteCard {
    constructor({ cardService }) {
        this.cardService = cardService
    }

    async execute({ id }) {
        const response = await this.cardService.DeleteCard({
            id,
        })

        if (response.error) {
            return { error: response.error }
        }

        return {
            data: response,
        }
    }
}
