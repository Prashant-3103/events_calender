import React from 'react'
import '../components/Css/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/fontawesome-svg-core'

const Footer = () => {
  return (
    <div className='footer'>

           <div className='footer-div'>
           <h4 className='footer-title'>EVENTS CALENDAR</h4>
           <ul className='footer-ul'>
            <li> <a className='footer-a' href="/home"><p>HOME</p></a></li>
            <li>  <a className='footer-a'  href="/about"><p>ABOUT</p></a></li>
            <li>  <a className='footer-a'  href="/sign-in"><p><button className='footer-button'>SIGN-IN</button></p></a></li>
           </ul>



           </div>



    <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
<p>
@{new Date().getFullYear()} prashant All right reserved ❤️
</p>
        </div>
        </div>
    </div>


  )
}

export default Footer
