import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Products from './pages/Products';
import Error404 from './pages/Error404';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        errorElement={<Error404/>}
        
      >
        <Route >
          <Route index element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          
        </Route>
      </Route>
       )
      );

  return (
    <div className='font-inter'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
