import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './Redux/Store';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000}
       closeOnClick
      theme="dark"
      pauseOnHover={false}/>
    <App />
    </Provider>
 
);


reportWebVitals();
