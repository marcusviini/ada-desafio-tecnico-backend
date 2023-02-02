import { Router } from 'express'

import { adapRoute } from '../adapter/express.adapter'

import { SvFindAllCards } from '../../data'

import { FindAllCardsController } from '../../presentation/controllers'

import { CardService } from '../../presentation/service/Card.service'

import { authMidlleware } from '../../infra/middlewares/auth'

const routes = Router()

const findAllCardsController = () => {
    const svFindAllCards = new SvFindAllCards({
        cardService: CardService,
    })

    return new FindAllCardsController({ svFindAllCards })
}

routes.get(
    /*
        #swagger.description = 'Rota para listar todos os cards'
        #swagger.tags = ['Card']
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
    '/cards3',
    authMidlleware,
    adapRoute(findAllCardsController())
)

export default routes
