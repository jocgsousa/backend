import { Router } from 'express';
import Multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';
import ProvidersController from './app/controllers/ProvidersController';

const upload = Multer(multerConfig);
const routes = new Router();
// Cria um novo usuário
routes.post('/users', UserController.store);
// Cria uma session do usuário
routes.post('/session', SessionController.store);
// Todas as requisições apos esta rota deverá conter o token de autenticação
routes.use(authMiddleware);
// Atualiza os dados do usuário
routes.put('/users', UserController.update);
// Upload de avatar
routes.post('/files', upload.single('file'), FileController.store);
// Listagem de provedores de serviço do gobarber
routes.get('/providers', ProvidersController.index);
export default routes;
