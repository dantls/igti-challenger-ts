import express from 'express';

import routesGrades from './routes.grades';

const app = express();

app.use(express.json());

app.use("/grades", routesGrades);

app.listen(3333);
