import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { RouterInfo } from './router/router'
import './reset.css'
import './App.css';

const RouterObject = createBrowserRouter(RouterInfo)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={RouterObject}></RouterProvider>
    </React.StrictMode>
);