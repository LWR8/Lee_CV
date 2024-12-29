
import { createRoot } from 'react-dom/client'
import './Styles/styles.css'
import App from './App.tsx'
import {HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
    <HashRouter>
    <App />
    </HashRouter>
)
