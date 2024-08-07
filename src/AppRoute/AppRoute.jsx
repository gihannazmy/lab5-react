import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

// Lazy loading components
const Homepage = lazy(() => import('../Components/ProductList'));
const Register = lazy(() => import('../Components/Register'));
const Login = lazy(() => import('../Components/Login'));
const ProductDetails = lazy(() => import('../Components/ProductDetails'));
const Cart = lazy(() => import('../Components/Cart'));
// const NotFound = lazy(() => import('../Components/NotFound/NotFound')); 

function AppRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          {/* <Route path="*" element={<Layout><NotFound /></Layout>} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoute;
