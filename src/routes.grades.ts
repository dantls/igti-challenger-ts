import express from 'express';

import GradesController from './controllers/GradesController';

const gradesController = new GradesController();

const routes = express.Router();

routes.post('/', gradesController.create);
routes.put('/:id', gradesController.update);
routes.get('/average', gradesController.calcAverage);
routes.get('/sum', gradesController.calcSum);
routes.get('/:id', gradesController.index);
routes.delete('/:id', gradesController.delete);

export default routes;