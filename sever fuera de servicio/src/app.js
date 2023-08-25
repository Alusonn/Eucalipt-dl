const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const path = require("path");
const exphbs = require("express-handlebars");

// Para usar aplicacion
const app = express();

// Para usar las distintas vistas
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.create({
    extname: ".hbs",
    defaultLayout: false, //No se le puede poner entre comillas porque tira error
    layoutsDir: "views/layouts/",
  }).engine
);
app.set("view engine", ".hbs");

// Para ver cambios y solicitudes en consola
app.use(morgan("dev"));

// Para usar el req.body se usa esto
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Para usar rutas
app.use(routes);

// Aplicacion estatica
app.use(express.static(path.join(__dirname, "public")));

// Exportacion de app

module.exports = app;
