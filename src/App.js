import db from "./db";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([
    // {
    //   id: 56,
    //   title: "Sneakers Joggers Shoes",
    //   description:
    //     "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
    //   price: 40,
    //   discountPercentage: 12.57,
    //   rating: 4.38,
    //   stock: 6,
    //   brand: "Sneakers",
    //   category: "mens-shoes",
    //   thumbnail: "https://dummyjson.com/image/i/products/56/thumbnail.jpg",
    //   images: [
    //     "https://dummyjson.com/image/i/products/56/1.jpg",
    //     "https://dummyjson.com/image/i/products/56/2.jpg",
    //     "https://dummyjson.com/image/i/products/56/3.jpg",
    //     "https://dummyjson.com/image/i/products/56/4.jpg",
    //     "https://dummyjson.com/image/i/products/56/5.jpg",
    //     "https://dummyjson.com/image/i/products/56/thumbnail.jpg",
    //   ],
    //   count: 1,
    // },
    // {
    //   id: 89,
    //   title: "Qualcomm original Car Charger",
    //   description:
    //     "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
    //   price: 40,
    //   discountPercentage: 17.53,
    //   rating: 4.2,
    //   stock: 79,
    //   brand: "TC Reusable",
    //   category: "automotive",
    //   thumbnail: "https://dummyjson.com/image/i/products/89/thumbnail.jpg",
    //   images: [
    //     "https://dummyjson.com/image/i/products/89/1.jpg",
    //     "https://dummyjson.com/image/i/products/89/2.jpg",
    //     "https://dummyjson.com/image/i/products/89/3.jpg",
    //     "https://dummyjson.com/image/i/products/89/4.jpg",
    //     "https://dummyjson.com/image/i/products/89/thumbnail.jpg",
    //   ],
    //   count: 1,
    // },
    // {
    //   id: 15,
    //   title: "Eau De Perfume Spray",
    //   description:
    //     "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    //   price: 30,
    //   discountPercentage: 10.99,
    //   rating: 4.7,
    //   stock: 105,
    //   brand: "Lord - Al-Rehab",
    //   category: "fragrances",
    //   thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    //   images: [
    //     "https://dummyjson.com/image/i/products/15/1.jpg",
    //     "https://dummyjson.com/image/i/products/15/2.jpg",
    //     "https://dummyjson.com/image/i/products/15/3.jpg",
    //     "https://dummyjson.com/image/i/products/15/4.jpg",
    //     "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    //   ],
    //   count: 1,
    // },
  ]);

  const addToCart = (product) => {
    let foundIndex = null;
    let checkExist = cart.find((el, index) => {
      foundIndex = index;
      return el.id === product.id;
    });

    if (checkExist) {
      let tempCart = [...cart];
      tempCart[foundIndex].count++;
      setCart(tempCart);
    } else {
      product.count = 1;
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (index) => {
    let tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage products={db} />} />
        <Route path="/shop" element={<ShopPage products={db} />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={db} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
