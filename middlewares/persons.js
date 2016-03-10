const models = require('../models');
const User = models.User;

export function getAll(req, res, next) {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
}

export function postOne(req, res, next) {
  let user = {
    firstName: req.body.first_name,
    lastName: req.body.last_name
  };

  User.create(user)
    .then((user) =>{
      res.json(user);
    })
    .catch(next);
}

export function getOne(req, res, next) {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
}

export function putOne(req, res, next) {
  User.findById(req.params.id)
    .then((user) =>{
      if (!user) return res.send('usuario nao encontrado');

      user.firstName = req.params.first_name;
      user.lastName = req.params.last_name;

      return user.save()
        .then((user) =>{
          res.json(user);
        })
        .catch(next);
    })
    .catch(next);
}

export function deleteOne(req, res, next) {
  User.findById(req.params.id)
    .then((user) =>{
      if(!user) return res.send('usuario nao encontrado');

      return user.destroy()
        .then((user) =>{
          res.json(user);
        })
        .catch(next);
    })
    .catch(next);
}
