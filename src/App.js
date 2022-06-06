import React from 'nano-react';
import './App.css'; 
import {BsGlobe2} from 'react-icons/bs';
import {SiFacebook} from 'react-icons/si';
import {IoIosCall} from 'react-icons/io';

function App() {
  return (
    <div className="App">
      <div className='main'><img className='logo' src='./logo.png' alt=''/></div>
      <div className='header'>
       
       
       <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
       </div>
       <div className='middle'>
       <div className='img1'><img src='1.png' className='image1' alt='' /></div>
        <div className='middle_head'>
        <p>  
       <li className='para'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
       <li className='para1'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
       </p>
       <img src='2.png' className='image2'  alt='' />
       <p className='middle_para'>Government of India has awarded the <b> "National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
         
      </div>
       
      <div className='footer'>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img src='./3.png' className='image3' alt='' />
      <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <hr className='hori'/>
      <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className='sticky'>
       <span><IoIosCall/>Toll free 1800 200 1234 </span>
      <span><SiFacebook/>www.facebook.com/cripumps</span>
      <span><BsGlobe2/>www.cripumps.com</span>
       </div>
      
       
    </div>
  );
}

export default App;
