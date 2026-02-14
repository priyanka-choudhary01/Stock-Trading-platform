import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/homePage';
import ProductPage from './landing_page/products/ProductPage';
import SignupPage from './landing_page/signup/signupPage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import SuppotPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import LoginPage from './landing_page/login/login'
import Notfound from './landing_page/notFound';
// import Home from '../dashboard/src/components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/signup' element={<SignupPage/>}></Route>
  <Route path='/about' element={<AboutPage/>}></Route>
  <Route path='/product' element={<ProductPage/>}></Route>
  <Route path='/pricing' element={<PricingPage/>}></Route>
  <Route path='/support' element={<SuppotPage/>}></Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='*' element={<Notfound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
);


