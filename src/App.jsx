import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import About from './pages/About';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        
      >
        <Route >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          
        </Route>
      </Route>
       )
      );

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
