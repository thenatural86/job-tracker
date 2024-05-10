import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import mongoose from 'mongoose'

import { validateTest } from './middleware/validationMiddleware.js'

// routes
import jobRouter from './routes/jobRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMIddleware.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/api/v1/test', validateTest, (req, res) => {
  const { name } = req.body
  res.json({ message: `hello ${name}` })
})

app.use('/api/v1/jobs', jobRouter)

// Not Found Middleware
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

// Error Middleware
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
  await mongoose.connect(process.env.MONGO_URL)

  app.listen(port, () => {
    console.log(`server is listening on Port ${port} ...`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
