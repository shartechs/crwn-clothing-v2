
import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import {UserProvider} from './contexts/UserContext/UserContext';

const rootElement =   document.getElementById("root");
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>

      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

