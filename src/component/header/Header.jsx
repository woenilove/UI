import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
             <span className="headerTitleSm">은.희.원's Full Stack Developer</span>
             <span className="headerTitleLg">Portfolio</span>
         </div>
        <img className="headerImg" 
              src="././images/1.jpg" alt="banner" />

    </div>
  )
}

export default Header