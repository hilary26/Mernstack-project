import Registration from "./Authentication/signup/signup-component";
import Login from "./Authentication/login/login-component";
import Homepage from "./page/Home/home-component";
import Walmart from "./page/layout/walmart-component";
import Product from "./page/Product/product-component";
import Advertisment from "./page/Advertisment/ads-component";
import {Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Authentication/context/authContext";
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/registration" element={<Registration /> } />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/walmart" element={<Walmart />} />
        <Route path="/Advertisment" element={<Advertisment />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
