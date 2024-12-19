import express from 'express';
import user from './controllers/usercontroller.js';

const routes = express.Router();

routes.use('/user', user);

export default routes;
