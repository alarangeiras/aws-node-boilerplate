import express, { Application } from "express";
import routes from "@routes/index";

const app: Application = express();

app.all("/", routes);

app.listen(3000, () => {
  console.log("the server is running");
});
