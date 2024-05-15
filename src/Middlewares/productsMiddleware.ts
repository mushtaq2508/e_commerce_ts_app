import { NextFunction, Request, Response } from "express-serve-static-core";

const productsListMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    alert: "products_list_middleware"
  });
  next();
};

export default productsListMiddleware;