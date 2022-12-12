import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FAQ from '../Components/FAQ/FAQ';
import Home from '../Components/Home/Home';
import LogIn from '../Components/Registration/LogIn';
import SignUp from '../Components/Registration/SignUp';
import Layout from '../Layout/Layout';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <h1>Path not available</h1>
            }
        ])
    }
]);