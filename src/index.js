import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter
} from "react-router-dom";

// prismic
import { PrismicProvider, PrismicToolbar } from '@prismicio/react'
import { client, repositoryName } from './landing/prismic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={
      <div className='h-screen w-screen bg-black flex flex-col items-center justify-center'>
          <div className="app-loading">
            <svg className="spinner" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </div>
      </div>
    }>
      <PrismicProvider client={client}>
        <PrismicToolbar repositoryName={repositoryName} />
        <App />
      </PrismicProvider>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
