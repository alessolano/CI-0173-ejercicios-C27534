import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import curriculumRoutes from "./routes/curriculum.routes.js";

const app = express();
const directory = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(directory, "views"));

app.use(express.static(path.join(directory, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(curriculumRoutes);

app.use((req, res) => {
    res.status(404).render("404", { title: "Página no encontrada" });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}/`);
});
