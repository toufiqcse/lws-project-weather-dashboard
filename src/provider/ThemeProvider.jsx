import { ThemeContext } from "../context";
import useTheme from "../Hooks/useTheme";


function ThemeProvider({ children }) {
    const { darkMode, setDarkMode } = useTheme()
    return (

        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeProvider;