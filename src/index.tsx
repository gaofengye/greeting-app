import './index.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtZ5MlHSl-QpvQw_jKHAANotdCPXxWlq8',
  authDomain: 'greeting-app-8c6b1.firebaseapp.com',
  projectId: 'greeting-app-8c6b1',
  storageBucket: 'greeting-app-8c6b1.appspot.com',
  messagingSenderId: '765826247542',
  appId: '1:765826247542:web:af536c64498c6ddd88e857',
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
