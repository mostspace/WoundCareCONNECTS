import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);
