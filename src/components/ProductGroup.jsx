import React from "react";
import Product from "./Product";

const ProductGroup = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductGroup;
