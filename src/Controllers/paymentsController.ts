import { Request, Response } from "express-serve-static-core";

const paymentOptions = (req: Request, res: Response) => {
  res.json({
    message: "payment options",
    data: ["upi", "wallet", "credit/debit cards"]
  });
};

const paymentSuccess = (req: Request, res: Response) => {
  res.json({
    alert: "Success!",
  });
}

const paymentFailed = (req: Request, res: Response) => {
  res.json({
    alert: "Failed!",
  });
}

export { paymentOptions, paymentSuccess, paymentFailed };