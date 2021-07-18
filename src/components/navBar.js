import React, { useState } from "react";
import UseDarkMode from "./util/UseDarkMode"

import { Link } from 'gatsby'



const Nav = () => {
  const [colorTheme,setTheme] = UseDarkMode()
  const [menu,setMenu] = useState(false)
  const Menu = [
    {
      name:"About",
      link:"/about"
    },
    {
      name:"Projects",
      link:"/projects"
    },
    {
      name:"Blog",
      link:"/posts"
    }
  ]
  const Component = () => (
    <>
      <div className="flex justify-between pt-5 pb-5 px-8 items-center rounded-lg shadow-lg dark:bg-transparent bg-white">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <a className="font-semibold lg:text-2xl md:px-6 lg:px-6 dark:text-white">Srivatsan</a>
              </Link>
            </div>
  

         
            <div className="w-full block px-16 dark:text-white lg:items-center lg:w-auto hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {Menu.map((v,i) => ( 
                  <span key={i}>
                    <Link to={v?.link}>
                <a className="px-5 hover:bg-gray-700 py-2 font-medium rounded-md hover:text-white">{v?.name}</a>
                </Link>
                </span>
                ))}
               
              </div>

             

              <button className="dark:text-white" onClick={() => setTheme(colorTheme) }>
                  {colorTheme === 'dark' ? 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>  

                : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
                }

                </button>
                <div className="block md:hidden lg:hidden dark:text-white">
    <button onClick={() => setMenu(!menu)} className="flex items-center mx-auto px-3 py-2 text-xl rounded text-teal-200 border-teal-400">
   
   {menu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
</svg> 

}
    </button>
  </div>
        
        </div>
        {menu ? <div className="md:hidden w-full z-50 bg-white dark:bg-gray-800 absolute text-left overflow-hidden shadow" id="mobile-menu">
          <div className="px-10 pt-8 pb-3 space-y-1 sm:px-3">
            {Menu.map((v,i) => 
            <span key={i}>
              <Link to={v?.link}>
            <a
              className="dark:text-white block px-3 py-5 rounded-md text-lg font-medium"
            >
             {v?.name}
            </a>
            </Link>
            </span>
          )}
          </div>
        </div> : "" }
    </>
  );
  return  <Component />;
};

export default Nav;