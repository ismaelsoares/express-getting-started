import { Router } from 'express';
import persons from './persons';
import products from './products';

const router = Router();

router.route('/')
  .get((req, res) => {
    res.render('index', { title: 'Hello Express', message: 'welcome to express!' });
  });

router.use(persons);
router.use(products);

export default router;
