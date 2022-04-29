import React from 'react'
import './topbar.css'

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbar_left'>
        <h2>EHW's portfolio</h2>
      </div>
      <div className='topbar_right'>
        <ul className='nav'>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Archiving</a></li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar