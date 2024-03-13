import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import './reset.css'
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);