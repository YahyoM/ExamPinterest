import express from "express";
import { ENV } from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js";

// routes
import userRoutes from "./pin/router/user/user.routes.js";
import createRoutes from "./pin/router/create/create.routes.js";
import mainRoutes from "./pin/router/main/main.routes.js";
import searchRoutes from "./pin/router/search/search.routes.js";

import authToken from "./pin/middleware/authToken.js";

const app = new express();

app.use(express.json());

app.use("/sign", userRoutes);
app.use("/main", mainRoutes);
app.use("/search", searchRoutes);
app.use(authToken);
app.use("/create", createRoutes);

async function start() {
  console.log("server is running");
  ConnectDb();
}

app.listen(ENV.PORT, start());
