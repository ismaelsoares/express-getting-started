const persons = [];

export function getAll(req, res, next) {
  res.json(persons);
}

export function postOne(req, res, next) {
  let person = {
    id: persons.length + 1,
    name: req.body.name,
    age: req.body.age
  };

  persons.push(person);

  res.json(person);
}

export function getOne(req, res, next) {
  const result = persons.find((person) => {
    return (person.id === parseInt(req.params.id));
  });

  if (result == void(0))
    return next(new Error('pessoa nao encontrada'));

  res.json(result);
}

export function putOne(req, res, next) {
  const index = persons.findIndex((person) => {
    return (person.id === parseInt(req.params.id));
  });

  if (index === -1)
    return next(new Error('pessoa nao encontrada'));

  const result = {
    name: req.body.name || persons[index].name,
    age: req.body.name || persons[index].age
  };

  persons[index] = result;

  res.json(persons[index]);
}

export function deleteOne(req, res, next) {
  const index = persons.findIndex((person) => {
    return (person.id === parseInt(req.params.id));
  });

  if (index === -1)
    return next(new Error('pessoa nao encontrada'));

  const removed = persons.splice(index, 1);

  res.json(removed[0]);
}
