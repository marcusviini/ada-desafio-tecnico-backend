export class SvLogin {
    constructor({ userService }) {
        this.userService = userService
    }

    async execute({ login, senha }) {
        const response = await this.userService.Login({
            user: {
                login,
                senha,
            },
        })

        if (response.error) {
            return { error: response.error }
        }

        return {
            data: response,
        }
    }
}
