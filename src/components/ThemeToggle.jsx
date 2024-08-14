import { useContext } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from '../context';

const ThemeToggle = () => {
    // import from context api
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            onClick={toggleTheme}
            className="  focus:outline-none"
        >
            {theme === 'dark' ?
                <FaMoon /> :
                <MdOutlineWbSunny className="text-black" />
            }
        </div>
    );
};

export default ThemeToggle;