import productsRouter from '@modules/products/routes/Products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Api na versão 1.0' });
});

export default routes;
