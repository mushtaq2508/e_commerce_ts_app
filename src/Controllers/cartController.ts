import express, { Request, Response } from "express-serve-static-core";

interface cartProducts {
  id: number;
  name: string;
  price: number;
}

let cartProducts: cartProducts[] = [
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
];

var listCart = (req: Request, res: Response) => {
  res.json({
    cartProducts
  });
};

var updateCart = (req: Request, res: Response) => {
  res.json(req.body);
};

var cartProductDetails = (req: Request, res: Response) => {
  const product = req.params.name;
  const prodDetails = cartProducts.map((prodDetails) => prodDetails.name === product);

    res.json({
      prodDetails
    });
};

const deleteCartProduct = (req: Request, res: Response) => {
  const product = req.params.name;
  const delProduct = cartProducts.filter((prodDetails) => prodDetails.name !== product);
  cartProducts = delProduct;
    res.json({
      delProduct,
    });
};

export { listCart, updateCart, cartProductDetails, deleteCartProduct };