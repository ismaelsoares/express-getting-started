import { Router } from 'express';
import * as login from '../middlewares/login';

const router = Router();

router.route('/login')
  .get(login.getAll)
  .post(login.postOne);

export default router;
