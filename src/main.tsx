
import { createRoot } from 'react-dom/client'
import './Styles/styles.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
