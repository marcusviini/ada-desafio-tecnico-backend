import { Router } from 'express'

import { adapRoute } from '../adapter/express.adapter'

import { SvLogin } from '../../data'

import { LoginController } from '../../presentation/controllers'

import { UserService } from '../../presentation/service/User.service'

import { loginValidator } from '../../infra/validators'

const routes = Router()

const loginController = () => {
    const svLogin = new SvLogin({
        userService: UserService,
    })

    return new LoginController({ svLogin })
}

routes.post(
    /*
        #swagger.description = 'Rota para realizar login'
        #swagger.tags = ['User']
        #swagger.requestBody = {
            required: true,
            "description": "Login do usuário",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "login": {
                                "type": "string",
                                "example": "login"
                            },
                            "senha": {
                                "type": "string",
                                "example": "senha"
                            },
                        },
                    },
                },
            },
        }
        #swagger.responses[200] = {
            description: "Mensagem de sucesso",
            schema:{
                message: 'string',
                token: 'string',
            }
        },
        #swagger.responses[400] = {
            description: "Ocorreu um erro",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/error"
                    }
                }
            }
        },
        #swagger.responses[500] = {
            description: "Ocorreu um erro interno",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/internal_error"
                    }
                }
            }
        },

    */
    '/login',
    loginValidator,
    adapRoute(loginController())
)

export default routes
