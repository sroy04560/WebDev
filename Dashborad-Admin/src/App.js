import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import './app.css';
import Home from './pages/home';
import User from './pages/User/User';
import UserPage from './pages/UserPage/UserPage';
import NewUser from './pages/newUser/newUser';
import ProductList from './pages/productList/productList';
import Product from './pages/product/product';
import NewProduct from './pages/newProduct/newProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/:userId" element={<UserPage />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>

          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
