const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000;
const usersRouter = require("./app/routes/user.routes");
const categoriesRouter = require("./app/routes/category.routes");
const forumsRouter = require("./app/routes/forum.routes");
const topicsRouter = require("./app/routes/topic.routes");
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
app.get("/categorie/:id/forums", categoriesRouter);

app.get("/forums", forumsRouter);
app.get("/forum/:id", forumsRouter);

app.get("/topics/", topicsRouter);
app.get("/topics/:id", topicsRouter);
app.get("/topic/:id", topicsRouter);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Servidor API Prorums abierto en -> http://localhost:${port}`);
});