import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyAsvIAhOiMtm4X0goe8bt-0P-E309ktpVg",
//   authDomain: "ipod-a6103.firebaseapp.com",
//   projectId: "ipod-a6103",
//   storageBucket: "ipod-a6103.appspot.com",
//   messagingSenderId: "562597529753",
//   appId: "1:562597529753:web:adf55c827c57a8afbb1008"
// };

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
