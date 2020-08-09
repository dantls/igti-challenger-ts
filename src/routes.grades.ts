import express from 'express';

import GradesController from './controllers/GradesController';

const gradesController = new GradesController();

const routes = express.Router();

routes.post('/', gradesController.create);
routes.put('/:id', gradesController.update);
routes.get('/:id', gradesController.index);
routes.get('/subject', gradesController.index);
routes.get('/type', gradesController.index);
routes.delete('/:id', gradesController.delete);

export default routes;