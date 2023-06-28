import React from 'react'
import '../components/Css/Nav.css'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
<nav className='nav'>
    <a  className='site-title'>EVENTS CALENDAR</a>


    <ul>
        <li>
        <Link className='nav_link' to='/home'>
          HOME
          </Link>
        </li>
        <li>
        <Link className='nav_link' to='/sign-in'>
            SIGN IN
          </Link>

        </li>
        <li>
        <Link className='nav_link' to='/about'>
            ABOUT
          </Link>
        </li>
    </ul>
</nav>

    </div>
  )
}

export default Navbar
