import { useEffect } from 'react';
import { ThemeContext } from "../context";
import useLocalStorage from '../Hooks/useLocalstorage';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    useEffect(() => {
        document.documentElement.className = theme;
        // window.localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };



    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeProvider;