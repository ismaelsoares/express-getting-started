const models = require('../models');
const Login = models.Login;

export function getAll(req, res, next){
  Login.findAll()
    .then((login) =>{
      res.json(login);
    })
    .catch(next);
}

export function postOne(req, res, next){
  const login = {
    usuario: req.body.usuario,
    senha: req.body.senha
  };
  Login.create(login)
  .then((login) => {
    res.json(login);
  })
  .catch(next);
}
