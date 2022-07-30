import React from 'react'
import Navbars from './Navbars'

const Contact = () => {
  return (
    <div>
        <Navbars/>
        <div className='contact'>
          <div className='card'>
            <h3>Contact Us</h3>
            <h5>Ph.No:<b>040-123456789</b></h5>
            <h6>email:<b>dreadnought@gmail.com</b></h6>
            <h6>Address: 1-1-25,Plot.No-25,Hyderabad,India</h6>
          </div>
        </div>
        <div className='footer'>
        <div className='left'>
         <h5>© Dreadnought 2022</h5>
         <h5>FAQs</h5>
        </div>
         
         <div className='right'>
         <h6>Terms of Use</h6>
        <h6>Privacy Policy</h6>
        <h6>Teach Onlinewith<br/><b>teach:able</b></h6>
         </div>
        </div>
    </div>
  )
}

export default Contact