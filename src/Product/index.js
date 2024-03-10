import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/context";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navHome = useNavigate()
  const { productAll, setProductAll } = useContext(ProductContext);
  
  return (
    <div className="container">
      {!productAll.length ? (
        <div
          class="flex items-center text-center mt-32 w-[580px] ml-96  p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">У вас еще нет продуктов!</span>
          </div>
          <button onClick={()=>navHome("/")}
           type="button" class="flex items-center justify-end ml-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>

        </div>
      ) : (
        <div className="flex items-center flex-wrap gap-10 mt-10 ">
          {productAll.map((el) => (
            <ProductCard Product={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
