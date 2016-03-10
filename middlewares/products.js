const models = require('../models');
const Product = models.Product;


export function getAll(req, res, next) {
	Product.findAll()
		.then((products) =>{
			res.json(products);
		})
		.catch(next);
}

export function postOne(req, res, next) {
	const product = {
		name: req.body.nome,
		description: req.body.descricao,
		price: req.body.preco
	};

	Product.create(product)
		.then((product) =>{
			res.json(product)
		})
		.catch(next);
}
export function getOne(req, res, next) {
	Product.findById(req.params.id)
		.then((product) =>{
			if (!product) return res.send ('produto nao encontrado');
			res.json(product);
		})
		.catch(next);
}

export function putOne(req, res, next) {
	Product.findById(req.params.id)
		.then((product) =>{
			if (!product) return res.send ('produto nao encontrado');

			product.name = req.body.nome || product.name;
			product.description = req.body.descricao || product.description;
			product.price = req.body.preco || product.price;

			return product.save()
				.then((product) =>{
					res.json(product);
				})
				.catch(next);
			})
			.catch(next);
}

export function deleteOne(req, res, next) {
	Product.findById(req.params.id)
		.then((product) =>{
			if(!product) return res.send('produto nao encontrado');

			return product.destroy()
	        .then((product) =>{
    	      res.json(product);
        	})
        	.catch(next);
    	})
    	.catch(next);
}

