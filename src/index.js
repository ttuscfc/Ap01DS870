const express = require("express");
const app = express();

const router = require("./router");
const port = 3333;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log("API rodando na porta " + port);
});