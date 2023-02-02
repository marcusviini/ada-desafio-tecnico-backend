import './tracer'

import path from 'path'

import * as grpc from '@grpc/grpc-js'

import * as protoLoader from '@grpc/proto-loader'

import { GenerateTokenImplementation } from '../presentation/implementation'

import { DbGenerateToken } from '../data'

import { adapter } from './adapter/Grpc.adapter'

import { JwtAdapter } from '../infra/adapters'

import 'dotenv/config'

const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'pb', 'token.proto'),

    {
        keepCase: true,

        longs: String,

        enums: String,

        defaults: true,

        oneofs: true,
    }
)

const proto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

const generateTokenImplementation = () => {
    const jwtAdapter = new JwtAdapter()

    const dbGenerateToken = new DbGenerateToken({
        jwtAdapter,
    })

    return new GenerateTokenImplementation({
        dbGenerateToken,
    })
}


server.addService(proto.TokenService.service, {
    generateToken: adapter(generateTokenImplementation()),
})

server.bindAsync(
    `0.0.0.0:${process.env.PORT_GRPC}`,

    grpc.ServerCredentials.createInsecure(),

    (err, port) => {
        if (err != null) {
            return console.error(err)
        }

        console.log(`[SERVICE-TOKEN] INICIADO NA PORTA = ${port}`)

        server.start()
    }
)
