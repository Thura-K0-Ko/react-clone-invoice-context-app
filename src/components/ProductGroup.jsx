import React, { useContext } from "react";
import Product from "./Product";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const ProductGroup = () => {
  const { products } = useContext(GeneralContext);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
