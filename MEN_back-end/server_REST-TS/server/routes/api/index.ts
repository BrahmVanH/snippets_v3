import { Router } from 'express';
import userRouter from './UserRoutes';

const router = Router();

router.use('/user', userRouter);

export default router;

