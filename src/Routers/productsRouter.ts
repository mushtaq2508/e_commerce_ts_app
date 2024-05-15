import { Router } from "express";
import { listProducts } from "../Controllers/productsController";
import productsMiddleware from "../Middlewares/productsMiddleware";

const productsRouter = Router();
productsRouter.get("/", listProducts);

export default productsRouter;