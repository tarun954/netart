import React from 'react' 
import { Link } from 'react-router-dom'
import '../App.css'
import Carousels from './Carousel'
import Navbars from './Navbar/Navbars' 

const Home = () => {
  return (
    <div>
        <Navbars/>
        <Carousels style={{height:500}}/>
        <div className='card'>
        <h4>We believe <b>humanity's survival</b> depends on us being <br/>
            a <b>spacefaring civilisation</b> and future deep tech<br/>
             founders will lead the way.
        </h4><br/><br/>
        <h4><b>Get paid to learn</b> the initial 2 months of founder<br/> 
        journey that covers everything other than engineering.<br/>
         We trust your coding skills.
        </h4>
        </div>
         <div className='part'>
         <h4><b>Social Initiative By</b></h4>
        <div className='middle'>
           
          <div><img style={{width:125}} src='https://cdn.fs.teachablecdn.com/iHpm1TXUQQeQk6PQVAMw' alt=''/>  <h5>AI for Good Foundation</h5></div>
          <div><img src='/y.png' alt='' />  <h5>Y Combinator</h5></div>
          <div><img src='/stan.png' alt='' /> <h5>Stanford University</h5></div>
        </div>
         </div>
         <div className='exper'>
        <h5><b>Student Experiences</b></h5>
           <div className='student'>
           <div>
           <img src='https://cdn.fs.teachablecdn.com/A2GPqp7OSrqIi7vEA4VY' alt='' />
          <h5>Rob Nielsen</h5>
          <p>Sophomore year student at MIT says, 'I have been coding since I was 12 but this course blew my mind away because<br/> now
           I know no fear. I can keep launching again and again till I win. The startup lessons are invaluable and practical.'</p>
          </div>
          <div>
          <img style={{width:430}} src='https://cdn.fs.teachablecdn.com/Uf8ZAKWtTGGO8jPVyzi3' alt='' />
          <h5>Rashmi Tirke</h5>
          <p>Final year student at IIT Madras says, 'I almost gave up but then I realised that if I can't build these things in a controlled<br/>
           learning environment then I am not going to survive as an entrepreneur in the real world. I am far more confident now.</p>
          </div>
          <div>
          <img  src='https://cdn.fs.teachablecdn.com/TdbTrEo5TkGv40hXNrCN' alt='' />
          <h5>David Raum</h5>
          <p>First year student at Cambridge says, 'I learnt so much and I plan to use the money I earned as a seed money for my<br/>
           startup. The smartest thing I did was to refer my friends as it increased my earnings and now we are working together.'</p>
          </div>
           </div>
          
        </div>
        <div className='footer'>
        <div className='left'>
         <h5>© Dreadnought 2022</h5>
         <h5><Link to='/faqs'>FAQs</Link></h5>
        </div>
         
         <div className='right'>
         <h6><Link to='/terms'>Terms of Use</Link></h6>
        <h6><Link to='/privacy'>Privacy Policy</Link></h6>
        <h6><Link to='/feature' >Teach Onlinewith<br/><b>teach:able</b></Link></h6>
         
         </div>
          
          
        </div>
    </div>
  )
}

export default Home