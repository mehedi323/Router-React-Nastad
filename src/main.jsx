import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home'; 
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import ContactsDetails from './Components/ContactsDetails/ContactsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/comments`),
        element: <Contact></Contact>
      },
      {
        path: '/contacts/:contactsId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.contactsId}`),
        element: <ContactsDetails></ContactsDetails>
      },
      {
        path: '/users',
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
    ]
    
  }
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
