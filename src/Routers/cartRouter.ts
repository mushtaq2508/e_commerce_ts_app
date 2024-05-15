import { Router } from "express";
import { deleteCartProduct, listCart, cartProductDetails, updateCart } from "../Controllers/cartController";
import cartMiddleware from "../Middlewares/cartMiddleware";

const cartRouter = Router();
cartRouter.get("/", listCart);
cartRouter.get("/:name", cartProductDetails);
cartRouter.post("/", updateCart);
cartRouter.delete("/:id", deleteCartProduct);

export default cartRouter;