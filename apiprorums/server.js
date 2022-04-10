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