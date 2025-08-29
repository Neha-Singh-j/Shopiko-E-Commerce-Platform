import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Cart from "./pages/Cart/Cart";
import ProductsIndex from "../src/pages/Products/Index";
import ProductsEdit from "../src/pages/Products/Edit";
import ProductsShow from "../src/pages/Products/Show";
import ProductsNew from "../src/pages/Products/New";

import ErrorPage from "../src/pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductsIndex />} />
      <Route path="/products/new" element={<ProductsNew />} />
      <Route path="/products/:id" element={<ProductsShow />} />
      <Route path="/products/:id/edit" element={<ProductsEdit />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
