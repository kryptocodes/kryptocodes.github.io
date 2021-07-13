import React, { useEffect, useState } from 'react'


const UseDarkMode = () => {
    const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        theme === 'dark' ?  root.style.backgroundColor = "#1F2937" :  root.style.backgroundColor = "#ffffff" ;
        console.log(theme,colorTheme)
    }, [theme,colorTheme])
    
    return [colorTheme,setTheme]
}










export default UseDarkMode