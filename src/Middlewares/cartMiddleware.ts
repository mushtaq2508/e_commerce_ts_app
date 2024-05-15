import { NextFunction, Request, Response } from "express-serve-static-core";

const cartMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    alert: "cart_middleware"
  });
  next();
};

export default cartMiddleware;