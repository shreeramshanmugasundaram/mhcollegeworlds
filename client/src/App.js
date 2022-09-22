import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Nav from "./components/Common/Nav";
import Collect from "./components/Collect/Collect";
import About from "./components/About/About";
import Price from "./components/Price/Price";
import Payment from "./components/Payment/Payment";
import Profile from "./components/Profile/Profile";
import PaymentProtect from "./ProtectedRoutes/PaymentProtect"
import LoginProtect from "./ProtectedRoutes/LoginProtect"
import Policy from "./components/Policy/Policy";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <Routes>
        <Route path="/" element = {<PaymentProtect/>} >
          <Route path="collect" element={<Collect/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
        <Route path = "/" element= {<LoginProtect/>}>
          <Route path="payment" element={<Payment />}></Route>
        </Route>

          <Route path="auth" element={<Auth />}></Route>

          <Route  index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/policies" element ={<Policy/>}></Route>
          <Route path="*" element = {<div className="notfound">404 : Page not Found </div>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
