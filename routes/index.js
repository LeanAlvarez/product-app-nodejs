const express = require('express')



const productRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')


function routerApi(app){
  const router = express.Router()
  //versionado
  app.use('/api/v1', router)


  //rutas a endpoints especificos
  router.use('/products', productRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)

}



module.exports = routerApi
