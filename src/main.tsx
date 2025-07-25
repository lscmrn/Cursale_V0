import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n';

AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
