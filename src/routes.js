import { Router } from 'express';

import TaskController from './app/controllers/TaskController';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);

routes.delete('/tasks/:id', TaskController.delete);

routes.put('/tasks/:id', TaskController.update);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
