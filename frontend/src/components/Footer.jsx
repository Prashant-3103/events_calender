import React from 'react'
import '../components/Css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

           <div className='footer-div'>
           <h4 className='footer-title'>EVENTS CALENDAR</h4>
            <a className='footer-a' href="/home"><p>HOME</p></a>
            <a className='footer-a'  href="/about"><p>ABOUT</p></a>
            <a className='footer-a'  href="/sign-in"><p><button className='footer-button'>SIGN-IN</button></p></a>
           </div>



    <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
<p>
@{new Date().getFullYear()} prashant All right reserved
</p>
        </div>
        </div>
    </div>


  )
}

export default Footer
