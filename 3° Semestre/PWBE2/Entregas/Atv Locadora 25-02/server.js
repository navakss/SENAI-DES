require('dotenv').config();

const exporess = require("express");
const cors = require("cors");

const app =  express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta" + process.env.POT_APP);
});