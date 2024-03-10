import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const nav = useNavigate();
  const { basket, setBasket } = useContext(ProductContext);
  const addQuantity = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };
  const deceBasket = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };
  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket"));
    setBasket(res);
  };
  const addDelete = (btn) => {
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((el) => el.id !== btn)])
    );
    readProduct();
  };
  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };

  useEffect(() => {
    getBasket();
    readProduct();
  }, []);



let total= basket.reduce((acc,el)=>{
 return acc+el.quantity * el.price 
}, 0)

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.length ? (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-32 ml-48 ">
              <table class="w-[1000px] text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product img
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Qantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {basket.map((el, id) => (
                  <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={el.url} width={100} alt="img" />
                      </th>
                      <td class="px-6 py-4">{el.name}</td>
                      <td class="px-6 py-4 flex items-center text-center mt-4 gap-3">
                        <button onClick={() => deceBasket(el)}>-</button>
                        <h1>{el.quantity}</h1>
                        <button onClick={() => addQuantity(el)}>+</button>
                      </td>
                      <td class="px-6 py-4">{el.price * el.quantity}$</td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => addDelete(el.id)}
                          type="button"
                          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
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
              <span class="sr-only ">Info</span>
              <div>
                <span class="font-medium">У вас еще нет продуктов!</span>
              </div>
              <button
                onClick={() => nav("/product")}
                type="button"
                class="flex items-center justify-end ml-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Back
              </button>
            </div>
          )}
          <h1 className="text-white text-3xl mt-24 ml-48">
            Total Price :
            {total} $
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Basket;
