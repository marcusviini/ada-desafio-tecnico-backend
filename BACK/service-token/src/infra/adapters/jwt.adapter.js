import * as jwt from 'jsonwebtoken'

import 'dotenv/config'

export class JwtAdapter {
    async generate({ login }) {
        return jwt.sign({ login }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.NODE_ENV === 'development' ? '9h' : '1800s',
        })
    }
}
