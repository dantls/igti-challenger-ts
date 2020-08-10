import express from 'express';

import GradesController from './controllers/GradesController';

const gradesController = new GradesController();

const routes = express.Router();


routes.get('/average', gradesController.calcAverage);
routes.get('/sum', gradesController.calcSum);

routes.post('/', gradesController.create);
routes.put('/:id', gradesController.update);
routes.delete('/:id', gradesController.delete);
routes.get('/:id', gradesController.index);


export default routes;