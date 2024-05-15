import express from "express";
import { Application, Request, Response } from "express-serve-static-core";
import productsRouter from "./Routers/productsRouter";
import cartRouter from "./Routers/cartRouter";
import paymentsRouter from "./Routers/paymentsRouter";

const app: Application = express();

const PORT: number = 2000;

app.get("/", (req: Request, res: Response) => {
  res.send("Shop Now!!!");
});
app.use("/cart", cartRouter);
app.use("/payment", paymentsRouter);
app.use("/productsList", productsRouter);
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});