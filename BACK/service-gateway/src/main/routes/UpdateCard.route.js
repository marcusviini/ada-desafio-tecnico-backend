import { Router } from 'express'

import { adapRoute } from '../adapter/express.adapter'

import { SvUpdateCard } from '../../data'

import { UpdateCardController } from '../../presentation/controllers'

import { CardService } from '../../presentation/service/Card.service'

import { updateCardValidator } from '../../infra/validators'

import { authMidlleware } from '../../infra/middlewares/auth'

import { generateLog } from '../../infra/middlewares/logs'

const routes = Router()

const updateCardController = () => {
    const svUpdateCard = new SvUpdateCard({
        cardService: CardService,
    })

    return new UpdateCardController({ svUpdateCard })
}

routes.put(
    /*
        #swagger.description = 'Rota para limpar o banco de dados em memoria'
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
        #swagger.responses[200] = {
            description: "Mensagem de sucesso",
            schema:{
                message: 'Database cleaned',
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
    '/cards/:id',
    authMidlleware,
    updateCardValidator,
    generateLog,
    adapRoute(updateCardController())
)

export default routes
