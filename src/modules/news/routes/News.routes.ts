import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import NewsController from '../controllers/NewsController';

const newsRouter = Router();
const newsController = new NewsController();

newsRouter.get('/', newsController.index);

newsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.show,
);

newsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      hat: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),
      author: Joi.string().required(),
      image: Joi.string().required(),
      link: Joi.string().required(),
      isActive: Joi.boolean().required(),
    },
  }),
  newsController.create,
);

newsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      hat: Joi.string(),
      title: Joi.string(),
      text: Joi.string(),
      author: Joi.string(),
      image: Joi.string(),
      link: Joi.string(),
      isActive: Joi.boolean(),
    },
  }),
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.update,
);

newsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  newsController.delete,
);

export default newsRouter;
