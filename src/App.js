import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProductList from "./pages/Product-list";
import ProductInfo from "./pages/Product-info";
import ProductEdit from "./pages/Product-edit";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-info/:product_id?" element={<ProductInfo />} />
        <Route path="/product-edit/:product_id?" element={<ProductEdit />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
