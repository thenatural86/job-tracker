import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import mongoose from 'mongoose'

import morgan from 'morgan'

// routes
import jobRouter from './routes/jobRouter.js'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/', (req, res) => {
  console.log(req)
  res.json({ message: 'data received', data: req.body })
})

app.use('/api/v1/jobs', jobRouter)

// Not Found Middleware
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' })
})

// Error Middleware
app.use((err, req, res, next) => {
  console.log(error)
  res.status(500).json({ msg: 'something went wrong' })
})

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
