const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index")
const path = require("path")
const exphbs = require("express-handlebars")

// Para usar aplicacion
const app = express();


app.set("views", path.)



// Para ver cambios y solicitudes en consola 
app.use(morgan("dev"));

// Para usar el req.body se usa esto
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Para usar rutas
app.use(routes);

//Aplicacion estatica
app.use(express.static(path.join(__dirname, "public")))

//Exportacion de app

module.exports = app;
