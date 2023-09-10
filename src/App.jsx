import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from './pages/About/About'
import Recipes from './pages/Recipes/Recipes'
import CUISINE from './pages/CUISINE/Cusine'
import HOLIDAYS from './pages/HOLIDAYS/HOLIDAYS'
import Popular from './pages/Popular/Popular'
import SEASONAL from './pages/SEASONAL/SEASONAL'
import HEALTHYDIET from './pages/HEALTHYDIET/HEALTHYDIET'
import MEATSEAFOOD from './pages/MEATSEAFOOD/MEATSEAFOOD'
import SignUp from './pages/signup/SignUp'
import Login from './pages/Login/Login'
import { CartProvider } from './components/ContextApi/ContaxtApi'
import AddToCart from './components/AddToCart/AddToCart'
import OrderReview from './pages/OrderReview/OrderReview'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/Recipes",
      element: <Recipes />
    },
    {
      path: "/Popular",
      element: <Popular />
    },
    {
      path: "/SEASONAL",
      element: <SEASONAL />
    },
    {
      path: "/CUISINE",
      element: <CUISINE />
    },
    {
      path: "/HOLIDAYS",
      element: <HOLIDAYS />
    },
    {
      path: "/MEATSEAFOOD",
      element: <MEATSEAFOOD />
    },
    {
      path: "/HEALTHYDIET",
      element: <HEALTHYDIET />
    },
    {
      path: "/SignUp",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/cart",
      element: <AddToCart />
    },
    {
      path: "/OrderReview",
      element: <OrderReview />
    },




  ]);

  return (
    <CartProvider >

      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
