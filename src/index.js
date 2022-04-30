require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express')
const JSONContract = require('./contract.json')

// Injects .env file in process.env
const PORT = process.env.SERVER_PORT || 80
// Middlewares
app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const appRoot = '/leavemealone'
// Set up API routes
app.use(`${appRoot}/user`, require('./routes/user'))
app.use(`${appRoot}/record`, require('./routes/record'))
app.use(`${appRoot}/docs`, swaggerUi.serve, swaggerUi.setup(JSONContract))
app.get(appRoot, (req, res) => {
  res.send('Root of remote server')
})

async function main() {
  try{
    console.log('Connecting to mongoDB...')
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to MongoDB')
  }catch(e){
    console.error('Error when connecting to MongoDB : ', e.message)
  }
  app.listen(PORT, () => {
    console.log(`OK -- Server started on port ${PORT}`)
  })
}
main()