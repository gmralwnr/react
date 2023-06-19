
import {useState, useCallback } from "react";
import ThemeContext  from "./목동역 5호선ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() =>{
        console.log("DfdF")
        if(theme =="light"){
            setTheme("dark");
        }else if(theme =="dark"){
            setTheme("light");
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent/>
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;
