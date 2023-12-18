import { Router, RequestHandler } from 'express';
import { getSingleUser, createUser, loginUser, addSlices, ICreateBody, ILoginBody, getAllUsers, deleteUser } from '../../controllers/userController';

import { authMiddleware, AuthMiddlewareHandler } from '../../utils/auth';

type RequestHandlerWithType<T> = RequestHandler<{}, {}, T>;

const userRouter = Router();

userRouter.route('/users').get(getAllUsers);
userRouter
	.route('/')
	.post(createUser as RequestHandlerWithType<ICreateBody>)
	.put(authMiddleware);

userRouter.route('/login').post(loginUser as RequestHandlerWithType<ILoginBody>);

userRouter.route('/user').get(getSingleUser);

userRouter.route('/remove').delete(deleteUser);

userRouter.route('/:slices').put(addSlices);

export default userRouter;
