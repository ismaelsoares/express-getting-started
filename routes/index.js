import { Router } from 'express';
import persons from './persons';

let router = Router();

router.route('/', (req, res) => {
    res.json({
        message: "Hello Word! 🎉"
    });
});

router.use(persons);

export default router;
