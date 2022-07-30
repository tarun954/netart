import React from 'react'
import Navbars from './Navbars'

const About = () => {
  return (
    <div>
        <Navbars/>
        <div>
            <div className='about'>
            <h2><b>About Dreadnought</b></h2>
              <p>Our team is comprised of digitally-native entrepreneurs, futurists and operators with<br/>
              strengths in AI, Space Tech, Genomics, AR/VR and Longevity. We decided to<br/>
               launch Dreadnought to super charge the future by helping unlock the potential of<br/>
                future deep tech entrepreneurs.</p>
            </div>
            <div className='review'>
              <div>
              <img src='/balie.svg' alt='' />
              <h5>Bailee Cooper</h5>
             <p>Technophile. Left Brain. Space Nerd. UC Berkeley Alum</p>
              </div>
            <div>
            <img src='/jason.svg' alt='' />
             <h5>Jason Miller</h5>
             <p>Futurist. Entrepreneur. Hardcore Nerd. Stanford Alum.</p>
            </div>
            <div>
            <img src='/aliza.svg' alt='' />
             <h5>Ragini Malhotra</h5>
             <p>AI Researcher. Right Brain. Loves Dogs. MIT Alum.</p>
            </div>
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

export default About