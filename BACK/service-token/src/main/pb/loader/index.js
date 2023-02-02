import * as grpc from '@grpc/grpc-js'

import * as protoLoader from '@grpc/proto-loader'

import path from 'path'

import { promisify } from 'util'

import protoConfig from '../../config/proto'

const load = ({
    serviceName,

    fileName,

    address,

    credentials = grpc.credentials.createInsecure(),
}) => {
    const protoDef = protoLoader.loadSync(
        path.resolve(__dirname, '..', `${fileName}.proto`),

        protoConfig
    )

    const proto = grpc.loadPackageDefinition(protoDef)

    const client = new proto[serviceName](address, credentials)

    Object.entries(client.__proto__).map(([prop, value]) => {
        if (value.originalName !== undefined) {
            client[prop] = promisify(value)
        }
    })

    return client
}

export default load
