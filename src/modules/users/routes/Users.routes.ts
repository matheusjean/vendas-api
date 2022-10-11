import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import uploadConfig from '@config/upload';
import UsersController from '../controller/UserController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import UsersAvatarController from '../controller/UserAvatarController';
import multer from 'multer';

const usersRouter = Router();
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
