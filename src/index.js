import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
// import Login3 from "./pages/Login3";
import QuickCallDashboard from './pages/quick-call-dashboard';
// import Test from "./pages/Test";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="https://main--starlit-muffin-ae27c3.netlify.app/login2" element={<Login2 />} />
        {/* <Route path="/login3" element={<Login3 />} /> */}
        <Route path="https://main--starlit-muffin-ae27c3.netlify.app/quick-call-dashboard" element={<QuickCallDashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
