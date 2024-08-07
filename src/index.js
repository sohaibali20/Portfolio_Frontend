import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout';
import Home from './Components/Home';
import ContactData from './Components/contactData';
import LoginForm from './Components/Login';
import { AuthProvider } from './Context/AuthContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"admin",
        element:<ContactData/>
      },
      {
        path:"login",
        element: <LoginForm/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);
