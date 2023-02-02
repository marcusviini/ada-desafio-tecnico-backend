import { Router } from 'express'

import { adapRoute } from '../adapter/express.adapter'

import { SvDeleteCard } from '../../data'

import { DeleteCardController } from '../../presentation/controllers'

import { CardService } from '../../presentation/service/Card.service'

import { deleteCardValidator } from '../../infra/validators'

import { authMidlleware } from '../../infra/middlewares/auth'

import { generateLog } from '../../infra/middlewares/logs'

const routes = Router()

const deleteCardController = () => {
    const svDeleteCard = new SvDeleteCard({
        cardService: CardService,
    })

    return new DeleteCardController({ svDeleteCard })
}

routes.delete(
    /*
        #swagger.description = 'Rota para deletar um card'
        #swagger.tags = ['Card']
         #swagger.parameters['id'] = {
            in: "header",
            description: "Id do card",
            required: "true",
            type: "string",
        },
        #swagger.responses[200] = {
            description: "Mensagem de sucesso",
            schema:{
                message: 'string',
                cards: [
                    {
                        id: 'string',
                        titulo: 'string',
                        conteudo: 'string',
                        lista: 'string',
                    }
                ]
            }
        },
        #swagger.responses[404] = {
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
    '/cards2/:id',
    authMidlleware,
    deleteCardValidator,
    generateLog,
    adapRoute(deleteCardController())
)

export default routes
