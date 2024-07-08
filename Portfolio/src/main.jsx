//import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import Error from './components/ErrorPage';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/index.jsx';
import Talents from './components/Talents/index.jsx';

import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'talents',
        element: <Talents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );


