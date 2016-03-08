import express from 'express';
import routes from '../routes';
import bodyParser from 'body-parser';

let app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
app.use((req, res, next) => {
    res.status(404).send("Rota não encontrada");
});
app.use((err, req, res, next) => {
    if(req.headersSent) return next();
    res.status(500).send(err.message);
});
app.listen(port, (err) => {
    if(err) console.error(err);
    console.log("Servidor iniciado! 🤓");
});
