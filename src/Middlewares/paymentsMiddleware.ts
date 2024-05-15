import { NextFunction, Request, Response } from "express-serve-static-core";

const paymentMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    alert: "payment_middleware"
  });
  next();
};

export default paymentMiddleware;