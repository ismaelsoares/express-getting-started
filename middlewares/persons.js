let persons = [];

export function getAll(req, res, next){
    res.json(persons);
}
export function postOne(req, res, next){
    let person = {
        id: persons.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    persons.push(person);
    res.json(person);
}
export function getOne(req, res, next){
    let person = persons.filter((person) => {
        return (person.id === parseInt(req.params.id));
    });
    if(person.length === 0)
        return next(new Error('Pessoa não encontrada'));
    res.json(person[0]);
}
export function putOne(req, res, next){
    let person = persons.filter((person) => {
        return (person.id === parseInt(req.params.id));
    });
    if(person.length === 0)
        return next(new Error('Pessoa não encontrada'));

    let index = persons.indexOf(person);

    person[0].name  = req.body.name || person[0].name;
    person[0].age   = req.body.age  || person[0].age;

    persons[index]  = person[0];

    res.json(person[0]);
}
export function deleteOne(req, res, next){
    let person = persons.filter((person) => {
        return (person.id === parseInt(req.params.id));
    });
    if(person.length === 0)
        return next(new Error('Pessoa não encontrada'));

    let index = persons.indexOf(person);

    persons.splice(index, 1);

    res.json(person[0]);
}
