import { Router } from 'express'

import { adapRoute } from '../adapter/express.adapter'

import { SvCreateCard } from '../../data'

import { CreateCardController } from '../../presentation/controllers'

import { CardService } from '../../presentation/service/Card.service'

import { createCardValidator } from '../../infra/validators'

import { authMidlleware } from '../../infra/middlewares/auth'

const routes = Router()

const createCardController = () => {
    const svCreateCard = new SvCreateCard({
        cardService: CardService,
    })

    return new CreateCardController({ svCreateCard })
}

routes.post(
    /*
        #swagger.description = 'Rota para criar um card'
        #swagger.tags = ['Card']
        #swagger.requestBody = {
            required: true,
            "description": "Informações do card",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "titulo": {
                                "type": "string",
                                "example": "titulo"
                            },
                            "conteudo": {
                                "type": "string",
                                "example": "conteudo"
                            },
                            "lista": {
                                "type": "string",
                                "example": "lista"
                            }
                        },
                    },
                },
            },
        },
        #swagger.responses[201] = {
            description: "Mensagem de sucesso",
            schema:{
                message: 'string',
                card: {
                    id: 'string',
                    titulo: 'string',
                    conteudo: 'string',
                    list: 'string',
                }
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
    '/cards',
    authMidlleware,
    createCardValidator,
    adapRoute(createCardController())
)

export default routes
