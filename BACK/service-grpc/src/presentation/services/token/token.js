import 'dotenv/config'
import load from '../../../main/pb/loader'

export const TokenClient = load({
  serviceName: 'TokenService',
  address: process.env.GRPC_TOKEN,
  fileName: 'token',
})
