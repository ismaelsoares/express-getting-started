import { Router } from 'express';
import * as products from '../middlewares/products';

const router = Router();

router.route('/products')
	.get(products.getAll)
	.post(products.postOne);

router.route('/products/:id')
	.get(products.getOne)
	.put(products.putOne)
	.delete(products.deleteOne);

export default router;