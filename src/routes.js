import express from 'express';
import user from './controllers/usercontroller.js';
import loginUser from './controllers/logincontroller.js';
import { createTexto, fetchTextos } from './controllers/textcontroller.js';

const routes = express.Router();

routes.use('/user', user);
routes.use('/login', loginUser);
routes.post('/textos', createTexto);
routes.get('/textos', fetchTextos);

export default routes;
