import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => response.json({ messege: 'Hello Word' }));

export default routes;
