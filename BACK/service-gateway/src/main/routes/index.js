import { Router } from 'express'

import Login from './Login.route'
import CreateCard from './CreateCard.route'
import UpdateCard from './UpdateCard.route'
import FindAllCards from './FindAllCards.route'
import DeleteCard from './DeleteCard.route'

const routes = [Login, CreateCard, UpdateCard, FindAllCards, DeleteCard]

const router = Router()

export const exposeRoutes = routes.map((routerMap) =>
    router.use('/', routerMap)
)
