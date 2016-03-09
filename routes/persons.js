import { Router } from 'express';
import * as persons from '../middlewares/persons';

const router = Router();

router.route('/persons')
  .get(persons.getAll)
  .post(persons.postOne);

router.route('/persons/:id')
  .get(persons.getOne)
  .put(persons.putOne)
  .delete(persons.deleteOne);

export default router;
