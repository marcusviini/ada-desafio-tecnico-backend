export class SvFindAllCards {
    constructor({ cardService }) {
        this.cardService = cardService
    }

    async execute() {
        const response = await this.cardService.FindAllCards({})

        if (response.error) {
            return { error: response.error }
        }

        return {
            data: response,
        }
    }
}
