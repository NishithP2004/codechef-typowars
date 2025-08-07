import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.get("/", (request, response) => {
  console.log("on server");
  response.sendFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "typowars.html"),
  );
});

app.listen(1234, "0.0.0.0", () => {
  console.log("listening on 0.0.0.0:1234");
});
