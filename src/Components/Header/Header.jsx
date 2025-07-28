import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../Context/ThemeContext.jsx";

const Header = () => {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <header className='flex justify-between items-center py-4 border-b-2 dark:border-gray-700'>
            <h1 className='text-3xl md:text-4xl font-bold dark:text-white'>Knowledge Cafe</h1>
            
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="text-2xl dark:text-yellow-300 text-gray-800">
                    {themeMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                </button>
                <img className="w-12 h-12" src="https://i.ibb.co/bgMZhDbQ/boy1.png" alt="Profile" />
            </div>
        </header>
    );
};

export default Header;