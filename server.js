const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const sitePath = path.join(__dirname, "ejercicio-01");

app.use(express.static(sitePath));

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}/`);
});