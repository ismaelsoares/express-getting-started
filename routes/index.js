import { Router } from 'express';
import persons from './persons';

const router = Router();

router.route('/')
  .get((req, res) => {
    res.render('index', { title: 'Hello Express', message: 'welcome to express!' });
  });

router.use(persons);

export default router;
