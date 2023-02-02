import express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger/swagger-output.json'

import { exposeRoutes } from './routes'

const app = express()

app.use(json())

app.use(helmet())

app.use(cors())

app.use(exposeRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
