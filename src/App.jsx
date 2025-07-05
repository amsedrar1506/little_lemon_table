import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App(){
    return(
        <BrowserRouter>
                 <Navbar/>
                 <Routes>
                         <Route path="/" element={<HomePage/>}/>
                         <Route path="/about" element={<AboutPage/>}/>
                         <Route path="/menu" element={<MenuPage/>}/>
                         <Route path="/booking" element={<BookingPage/>}/>
                         <Route path="/order" element={<OrderPage/>}/>
                         <Route path="/login" element={<LoginPage/>}/>
                 </Routes>
        </BrowserRouter>
    );
}
export default App;
