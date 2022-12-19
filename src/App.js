import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { CategoryPage } from './Pages/CategoryPage';
import { ProductPage } from './Pages/ProductPage';
import { AdminDashboard } from './Pages/AdminDashboard';
import { AdminOrders } from './Pages/AdminOrders';
import { RegisterPage } from './Pages/RegisterPage';
import { LoginPage } from './Pages/LoginPage';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { WishList } from './Pages/WishList';


function App() { 
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/Shop/Category/:category" element={<CategoryPage/>} />
              <Route path="/Shop/Product/:name" element={<ProductPage />} />
              <Route path="/admin3000" element={<AdminDashboard />} />
              <Route path="/admin4000" element={<AdminOrders />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/WishList" element={<WishList/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
