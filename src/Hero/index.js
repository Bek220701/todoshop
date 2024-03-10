import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "../Product";


const Hero = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { productAll, setProductAll } = useContext(ProductContext);

  const errorMess = (sms) => {
    toast.error(sms, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const succesMess = () => {
    toast.success("У вас товар успешно добавлен!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      errorMess("Заполните пустые поле!");
    } else if (productAll.some((el) => el.name === productName)) {
      errorMess("У вас токой продукт сушествует!");
    } else {
      let result = JSON.parse(localStorage.getItem("product")) || [];
      let newPraduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productUrl,
        name: productName,
        price: productPrice,
        quantity: 1,
      };
      let res = [...result, newPraduct];
      setProductAll(res);
      localStorage.setItem("product", JSON.stringify(res));
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      succesMess();
    }
  };
const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div id="hero">
      <div className="container">
        <div className="hero flex items-center flex-col mt-52 ">
          <div class="relative z-0 w-[600px] mb-5 group mt-5">
            <input 
              onChange={onChange}
              type="file"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PRODUCT URL...
            </label>
          </div>
          <div class="relative z-0 w-[600px] mb-5 group mt-8">
            <input  onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addProduct();
                }
              }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PRODUCT NAME...
            </label>
          </div>
          <div class="relative z-0 w-[600px] mb-5 group mt-8">
            <input  onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addProduct();
                }
              }}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PRODUCT PRICE...
            </label>
          </div>
          <button
            onClick={() => addProduct()}
            type="button"
            class="text-white bg-gradient-to-r mt-8 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            ADD PRODUCT
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
