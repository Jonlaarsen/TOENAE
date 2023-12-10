import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SingelProductPage from "./pages/SingelProductPage";
import Cart from "./pages/Cart";
import { useState } from "react";
import ShopCategory from "./pages/ShopCategory";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<SingelProductPage />}>
            <Route path=":productId" element={<SingelProductPage />} />
          </Route>
          <Route path="shoes" element={<ShopCategory category="shoes" />} />
          <Route path="t-shirt" element={<ShopCategory category="t-shirt" />} />
          <Route path="hoodies" element={<ShopCategory category="hoodies" />} />
          <Route path="pants" element={<ShopCategory category="pants" />} />
          <Route path="jackets" element={<ShopCategory category="jackets" />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
