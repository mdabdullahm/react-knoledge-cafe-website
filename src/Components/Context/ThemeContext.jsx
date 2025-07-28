import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };
    
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.classList.remove('light', 'dark');
        htmlElement.classList.add(themeMode);
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useTheme = () => {
    return useContext(ThemeContext);
};