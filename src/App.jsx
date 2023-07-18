import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import RootLayout from './routes/RootLayout.jsx';
import ErrorPage from './components/ErrorPage';
import Card from './components/Card.jsx';
import { element } from 'prop-types';
import MyFileDropzone from './components/MyFileDropzone.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element: <Card></Card>,
    },
    {
      path:'/about',
      element: <About></About>,
    },
    {
      path:'/contact',
      element: <Contact></Contact>,
    },
    {
      path: '/FileDropzone',
      element: <MyFileDropzone></MyFileDropzone>
    }
    ]},
])

function App() {  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
