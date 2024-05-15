import express, { Router } from "express";
import { paymentOptions, paymentFailed, paymentSuccess } from "../Controllers/paymentsController";
import paymentsMiddleware from "../Middlewares/paymentsMiddleware";

const paymentsRouter = Router();
paymentsRouter.get("/paymentOptions", paymentOptions);
paymentsRouter.get("/paymentSuccess", paymentSuccess);
paymentsRouter.get("/paymentFailed", paymentFailed);

export default paymentsRouter;