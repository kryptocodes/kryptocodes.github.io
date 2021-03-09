import React, { useState } from 'react';
import styled from '@emotion/styled'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'gatsby'



//navbar
import { Spiral as Hamburger } from 'hamburger-react'

const LinkToPage = [
  {
    href:"/about",
    name:"About",
  },
  {
    href:"https://github.com/kryptocodes",
    name:"Projects",
  },
  {
    href:"/blog",
    name:"Blog",
  },{
    href: "/snippets",
    name:"Snippets"
  }
]

const currentTab = (path) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  console.log(url)
  if( url.includes(path)){
      return {color: '#F0860C'}
  }
}

const Nav = () => {
  const [click, setClick] = useState(false)

  if(click == true) {
    const targetElement = document.querySelector(".navbar");
    disableBodyScroll(targetElement);
  }
  else {
    clearAllBodyScrollLocks();
  }

  const NavBarContainer = () => (
    <div className='navbar shadow'>
      <Link to="/">
        <span className='navbar-brand mx-auto' onClick={() => setClick(false)}>
          <h4>Srivatsan</h4>
        </span>
        </Link>
      
        <div className='menu-icon' onClick={() => setClick(!click)}>
        <Hamburger direction={'left'}  duration={15} color="white" toggled={click} toggle={setClick} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        {LinkToPage.map((value) => 
          <li className='nav-item'>
            <Link to={value.href}>
              <a style={currentTab(value.href)} className='nav-links' onClick={() => setClick(false)}>
              {value.name}
              </a>
            </Link>
          </li>)}
        </ul>
      </div>
  )

  return (
    <Style>
    <NavBarContainer className="shadow-lg"/>
  </Style>
  );
}


const Style = styled.div`
.navbar {
  left: 0;
  width: 100%;
  background: #333333;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight:600;
  z-index:999;
}

a {
  color:white;
  text-decoration: none;

  &:hover{
    color:#F0860C;
  }
}

.navbar-brand {
  color: #F0860C;
  h4 {
  font-weight:700;
  margin-bottom:1rem;
}
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
}
.nav-item {
  color: white;
  display: flex;
  align-items: center;
  height: 60px;
}
.nav-links {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
.nav-links:hover {
  color: #F3B431;
  transition: all 0.2s ease-out;
}

.nav-links-mobile {
  display: none;
}
.menu-icon {
  display: none;
}
@media screen and (max-width: 960px) {
  .NavbarItems {
    position: relative;
  }
  .nav-item {
    height: 4rem;
  }

  .navbar-brand {
    padding: 1rem;
  }
  .nav-menu {
    display: flex;
    grid-gap: 0px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: -100%;
    padding-top:2rem;
    opacity: 1;
    transition: all 0.5s ease;
    background-color:#333333;
  }
  .nav-menu.active {
    padding-right:30px;
    align-items: center;
    left: 0px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
  .nav-links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  .nav-links:hover {
    color: #F3B431;
  }

 
  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-45%, 25%);
    cursor: pointer;
  }
}
`

export default Nav