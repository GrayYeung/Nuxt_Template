import mongoose from 'mongoose'
import { initExampleDatabase } from './backend/service/exampleService'

/** mongodb connection **/
mongoose.connect(process.env.MONGO_DB_URL ?? '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

export const db = mongoose
db.connection.on('error', console.error.bind(console, 'connection error:'))
db.connection.once('open', () => console.log('Database connected.'))

initExampleDatabase()
