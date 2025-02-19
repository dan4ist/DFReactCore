import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';

const theme = createTheme();

import App from './App.jsx'
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Sandbox from './pages/Sandbox.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/sandbox" element={<Sandbox />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
)
