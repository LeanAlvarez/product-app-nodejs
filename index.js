const express = require("express")
const cors = require('cors')
const routerApi = require('./routes')
const config = require('./config')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express()

const port = config.PORT

//middleware para parsear a json
app.use(express.json())


//origenes que se pueden conectar a la aplicacion con los cors
const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:3001']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Acceso no permitido'))
    }
  }
}
//middleware para evitar los cors
app.use(cors())



app.get('/', (req, res) => {
  res.send("hola mi server en express")
})

app.get('/nueva-ruta', (req, res) => {
  res.send("hola soy una nueva ruta")
})


routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)




app.listen(port, () => {
  console.log("mi port es: ", port)
})
