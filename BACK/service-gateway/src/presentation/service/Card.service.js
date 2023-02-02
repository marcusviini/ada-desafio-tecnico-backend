import 'dotenv/config'

import load from '../../main/pb/loader'

export const CardService = load({
    serviceName: 'CardService',

    address: process.env.GRPC_CARD_SERVICE,

    fileName: 'card',
})
