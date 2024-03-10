import React, { useEffect, useState } from "react";
import { ProductContext } from "./context";

const RootContext = ({ children }) => {
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);

  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    let bas = JSON.parse(localStorage.getItem("basket")) || [];
    setProductAll(res);
    setBasket(bas);
  };
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productAll,
        basket,
        setProductAll,
        setBasket
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
