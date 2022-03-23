/* const mysql = require('mysql');

// Agregue las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'prorums'
});

connection.connect(function(err) {
  // en caso de error
  if(err){
      console.log(err.code);
      console.log(err.fatal);
  }
});

function getQuery(query) {
  // conectarse a mysql
  

  // Realizar una consulta
  let resp = ""

  connection.query('SELECT * from user LIMIT 10', function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query: ", err);
        return;
    }

    console.log("Consulta ejecutada con éxito:", rows);
    resp = rows
  });

  // Cerrar la conexión
 
}



const cors = require('cors');




const express = require("express");
const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/users", (req, res) => {
  res.json(resp);
});

app.get("/forums", (req, res) => {
  resp = getQuery()
  res.json(resp);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); */

const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000;
const usersRouter = require("./app/routes/user.routes");
const categoriesRouter = require("./app/routes/category.routes");
const forumsRouter = require("./app/routes/forum.routes");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.get("/users", usersRouter);
app.get("/categories", categoriesRouter);
app.get("/categories/:id/forums", categoriesRouter);
app.get("/forums", forumsRouter);
app.get("/forums/:id", forumsRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});