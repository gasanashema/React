import { useTheme } from "./themeContext";
import { useUser } from "./userContext";

export default function Dashboard(){
    const {user} = useUser();
    const {theme,setTheme} = useTheme();

    return (
        <div className={`h-screen ${theme === 'light'?'bg-gray-200':'bg-gray-900'}`}>

        <header>
            welcome {user.name}
            role: {user.role}
        </header>

        <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Change Theme</button>

        </div>

    )
}