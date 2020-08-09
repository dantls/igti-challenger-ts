import express from 'express';

import GradesController from './controllers/GradesController';

const gradesController = new GradesController();

const routes = express.Router();

routes.post('/', gradesController.create);

export default routes;