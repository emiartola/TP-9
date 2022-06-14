
import express from "express";
import rutas from './rutas';

const app = express();

require('./dbmysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(rutas);
app.listen(3001, () => console.log("Servidor en puerto 3001", 3001));

    