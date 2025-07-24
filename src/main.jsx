import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ✅ Importando AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Inicializando AOS (igual wow.js no Martex)
AOS.init({
  duration: 800, // tempo da animação
  once: true,    // anima apenas 1x ao entrar na tela
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
