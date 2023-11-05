import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import {
  Home,
  Landing,
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from './pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <AuthWrapper>
          <Home />
        </AuthWrapper>
      }
    >
      <Route index element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<SingleProduct />} />
      <Route
        path="checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
