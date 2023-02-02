export class DbGenerateToken {
    constructor({ jwtAdapter, passportAdapter }) {
        this.jwtAdapter = jwtAdapter

        this.passportAdapter = passportAdapter
    }

    async generateToken({ login }) {
        const token = await this.jwtAdapter.generate({
           login
        })

        return { token }
    }
}
