import 'dotenv/config'

import load from '../../main/pb/loader'

export const UserService = load({
    serviceName: 'UserService',

    address: process.env.GRPC_USER_SERVICE,

    fileName: 'user',
})
