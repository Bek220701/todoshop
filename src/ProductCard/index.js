import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/context";
import { MdDelete } from "react-icons/md";

const ProductCard = ({ Product }) => {
  const { productAll, basket, setBasket, setProductAll } =
    useContext(ProductContext);

  const addToBasket = (data) => {
    let findBasket = basket.find((el) => el.id === data.id);
    if (findBasket) {
      let changeBasket = basket.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      let result = JSON.parse(localStorage.getItem("basket")) || [];
      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setBasket(result);
    } else {
      let result = JSON.parse(localStorage.getItem("basket")) || [];
      result.push(data);
      localStorage.setItem("basket", JSON.stringify(result));
      setBasket(result);
    }
  };
  const deleteProduct = (Product) => {
    localStorage.setItem(
      "product",
      JSON.stringify([...productAll.filter((el) => el.id !== Product.id)])
    );
    readProduct();
  };

  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
  };
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div id="proCard">
      <div className="container">
        <div className="proCard ">
          <div class=" relative  w-[250px] text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg "
                src={Product.url}
                width={250}
                alt="img"
              />
              <a
                onClick={() => deleteProduct(Product)}
                href="#"
                className="absolute text-[#fafafc] right-[3px] bottom-[3px] text-3xl "
              >
                <MdDelete />
              </a>
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {Product.name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {Product.price} $
              </p>

              <button
                onClick={() => addToBasket(Product)}
                type="button"
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Ad to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// import React, { useContext, useEffect} from "react";
// import { ProductContext } from "../Context/context";
// import { MdDelete } from "react-icons/md";

// const ProductCard = ({ Product }) => {
//   const { productAll, basket, setBasket } = useContext(ProductContext);

//   const addToBasket = (data) => {
//     let findBasket = basket.find((el) => el.id === data.id);
//     if (findBasket) {
//       let changeBasket = basket.map((el) =>
//         el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
//       );
//       let result = JSON.parse(localStorage.getItem("basket")) || [];
//       localStorage.setItem("basket", JSON.stringify(changeBasket));
//       setBasket(result);
//     } else {
//       let result = JSON.parse(localStorage.getItem("basket")) || [];
//       result.push(data);
//       localStorage.setItem("basket", JSON.stringify(result));
//       setBasket(result);
//     }
//   };
// //   const readProduct = () => {
// //     let bas = JSON.parse(localStorage.getItem("product")) || [];
// //     setBasket(bas);
// //   };
// //   const deleteProduct = (Product) => {
// //     localStorage.setItem(
// //       "product",
// //       JSON.stringify([...productAll.filter((el) => el.id !== Product.id)])
// //     );
// //     readProduct();
// //   };
// //   useEffect(() => {
// //     addToBasket()
// //   }, []);

// const deleteProduct = (Product) => {
//     localStorage.setItem(
//       "product",
//       JSON.stringify([...productAll.filter((el) => el.id !== Product.id)])
//     );
//     readProduct();
//   };

//   const readProduct = () => {
//     let res = JSON.parse(localStorage.getItem("product")) || [];
//     setBasket(res);
//   };

//   useEffect(() => {
//     readProduct();
//   }, []);

//   return (
//     <div id="proCard">
//       <div className="container">
//         <div className="proCard ">
//           <div class=" relative  w-[250px] text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <a href="#">
//               <img
//                 class="rounded-t-lg "
//                 src={Product.url}
//                 width={250}
//                 alt="img"
//               />
//               <a
//                 onClick={() => deleteProduct(Product)}
//                 href="#"
//                 className="absolute text-[#fafafc] right-[3px] bottom-[3px] text-3xl "
//               >
//                 <MdDelete />
//               </a>
//             </a>
//             <div class="p-5">
//               <a href="#">
//                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {Product.name}
//                 </h5>
//               </a>
//               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 {Product.price} $
//               </p>

//               <button
//                 onClick={() => addToBasket(Product)}
//                 type="button"
//                 class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//               >
//                 Ad to Basket
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
