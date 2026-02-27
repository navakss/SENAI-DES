require('dotenv').config();

const express = require('express');
const cors = require("cors");

const app =  express();
const CarrosRouter = require("./src/routes/carros.routes");
const ClientesRouter = require("./src/routes/clientes.routes");

app.use(express.json());
app.use(cors());

app.use(CarrosRouter);
app.use(ClientesRouter);

app.listen(3000, () => {
    console.log("Online na porta 3000");
});