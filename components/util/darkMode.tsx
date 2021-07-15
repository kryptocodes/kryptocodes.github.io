import React, { useEffect, useState } from 'react'


const UseDarkMode = () => {
    const [theme, setTheme] = useState<any>(
        typeof window !== "undefined" ? localStorage.theme !== undefined ? localStorage.theme : "dark" :"light"
    )
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
      
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
       
        theme === 'dark' ?  root.style.backgroundColor = "#1F2937" :  root.style.backgroundColor = "#ffffff" ;
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }, [theme,colorTheme])
    
    return [colorTheme,setTheme] as const
}










export default UseDarkMode