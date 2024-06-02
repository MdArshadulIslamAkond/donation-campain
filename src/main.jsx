import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import DonationDetail from './components/DonationDetail/DonationDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "donation",
        element: <Donation /> ,
        loader: ()=>fetch("donationCampain.json")
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: ()=>fetch("donationCampain.json")
      },
      {
        path: "card/:id",
        element: <DonationDetail />,
        loader: ()=>fetch("donationCampain.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
