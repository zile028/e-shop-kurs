import db from "./db";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
