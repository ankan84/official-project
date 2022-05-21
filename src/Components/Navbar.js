import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li><a href="#"><i className="fa-solid fa-house home-icon"></i></a></li>
            <li><a href="#">INDIA</a></li>
            <li><a href="#">INTERNATIONAL</a></li>
            <li><a href="#">POLITICAL</a></li>
            <li><a href="#">GOVERNANCE</a></li>
            <li><a href="#">ECONOMY</a></li>
            <li><a href="#">SPORTS</a></li>
            <li><a href="#">SCIENCE&TECH</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">GET INVOVED</a></li>
            <li><a href="#" className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></a></li>
           
        </ul>

    </div>
    
  )
}

export default Navbar