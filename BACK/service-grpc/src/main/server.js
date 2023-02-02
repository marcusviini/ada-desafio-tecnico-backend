import path from 'path'

import * as grpc from 'grpc'

import * as protoLoader from '@grpc/proto-loader'

import {
  LoginImplementation,
  CreateCardImplementation,
  UpdateCardImplementation,
  DeleteCardImplementation,
  FindAllCardsImplementation,
} from '../presentation/implementation'

import {
  DbLogin,
  DbCreateCard,
  DbUpdateCard,
  DbDeleteCard,
  DbFindAllCards,
} from '../data'

import { TokenClient } from '../presentation/services/token/token'

import { CardRepository } from '../infra/database/repositories/Card.repository'

import { adapter } from './adapter/Grpc.adapter'

import '../infra/database'

import 'dotenv/config'

const packageUserService = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'user.proto'),

  {
    keepCase: true,

    longs: String,

    enums: String,

    defaults: true,

    oneofs: true,
  }
)

const packageCardService = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'card.proto'),

  {
    keepCase: true,

    longs: String,

    enums: String,

    defaults: true,

    oneofs: true,
  }
)

const proto = grpc.loadPackageDefinition([
  packageUserService,
  packageCardService,
])

const server = new grpc.Server()

const loginImplementation = () => {
  const dbLogin = new DbLogin({
    tokenService: TokenClient,
  })

  return new LoginImplementation({
    dbLogin,
  })
}

server.addService(proto[0].service.UserService, {
  Login: adapter(loginImplementation()),
})

const createCardImplementation = () => {
  const cardRepository = new CardRepository()

  const dbCreateCard = new DbCreateCard({
    cardRepository,
  })

  return new CreateCardImplementation({
    dbCreateCard,
  })
}

const updateCardImplementation = () => {
  const cardRepository = new CardRepository()

  const dbUpdateCard = new DbUpdateCard({
    cardRepository,
  })

  return new UpdateCardImplementation({
    dbUpdateCard,
  })
}

const deleteCardImplementation = () => {
  const cardRepository = new CardRepository()
  const dbDeleteCard = new DbDeleteCard({
    cardRepository,
  })

  return new DeleteCardImplementation({
    dbDeleteCard,
  })
}

const findAllCardsImplementation = () => {
  const cardRepository = new CardRepository()
  const dbFindAllCards = new DbFindAllCards({
    cardRepository,
  })

  return new FindAllCardsImplementation({
    dbFindAllCards,
  })
}

server.addService(proto[1].service.CardService, {
  CreateCard: adapter(createCardImplementation()),
  UpdateCard: adapter(updateCardImplementation()),
  DeleteCard: adapter(deleteCardImplementation()),
  FindAllCards: adapter(findAllCardsImplementation()),
})

server.bindAsync(
  `0.0.0.0:${process.env.PORT_GRPC}`,

  grpc.ServerCredentials.createInsecure(),

  (err, port) => {
    if (err != null) {
      return console.error(err)
    }

    console.log(`[SERVICE-GRPC] INICIADO NA PORTA = ${port}`)

    server.start()
  }
)
