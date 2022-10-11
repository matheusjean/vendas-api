import newsRouter from '@modules/news/routes/News.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/news', newsRouter);

export default routes;
