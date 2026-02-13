require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const listaRoutes = require("./src/routes/lista.routes");

app.use(express.json());
app.use(cors());
app.use(listaRoutes);

app.get("/", (req, res) => {
    res.send("AppOnline").end();
});

app.listen(3000, () => {
    console.log("Online na 3000");
});