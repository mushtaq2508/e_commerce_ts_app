import express, { Request, Response } from "express-serve-static-core";

interface products {
  id: number;
  name: string;
  price: number;
}

let products: products[] = [
  {
    id: 100,
    name: "product A",
    price: 10,
  },
  {
    id: 101,
    name: "product B",
    price: 20,
  },
  {
    id: 102,
    name: "product C",
    price: 30,
  },
  {
    id: 103,
    name: "product D",
    price: 40,
  }
];

const listProducts = (req: Request, res: Response) => {
  res.json({
    products
  });
};

export { listProducts };