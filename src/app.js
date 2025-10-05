import express from "express";
import routesIluminacion from "./routes/iluminacion.routes.js";
import routesDeteccion from "./routes/deteccion.routes.js";

export const app = express();

app.use(express.json());

app.use(routesIluminacion);
app.use(routesDeteccion);
