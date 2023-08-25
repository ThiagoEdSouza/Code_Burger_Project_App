import { Router } from 'express' //Importando a classe Router do express.
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProductController from './app/controllers/ProductController'

const upload = multer(multerConfig)

const routes = new Router() //Instanciando a classe e guardando dentro de uma variável.

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/products', upload.single('file'), ProductController.store)

export default routes //Exportando as rotas da aplicação.