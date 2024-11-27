import React from 'react';
import ReactDOM from 'react-dom/client';
//to work css
import './css/style.css'
import Nav from './nav.js'
import hero from './images/hero.png'
import Gallery from './gallery.js'
import About from './about.js'
import Services from './services.js'
import Testemonials from './testemonials.js'
import Contact from './contact.js'
export default function Home() {
  return (
    <>
    <div>
      <Nav/>
        <div className='hero' id="home">
           
            
               <div>
                 <img src={hero}  alt='hero-img'  className='hero-img'/>
               </div>
                <div className='icons'>
                    <i className='bx bxl-facebook-circle'></i>
                    <i className='bx bxl-instagram-alt' ></i>
                    <i className='bx bxl-tiktok'  ></i>
                </div>
                <div className='text'>
                   <h1>Hey I'm <span className="colorSpan">John</span></h1>
                   <h3>I’m video grapher</h3>
                   <p>Capturing Stories Through the LensTransforming moments into cinematic experiences with precision and creativity.</p>

                   <div className='buttons'>
                        <a className='btn'  href="#"> See More</a>
                        <a className='btn'  href="#">Content</a>
                   </div>
                </div>
             </div>
           
        

        <About/>
        <Gallery />
        <Services />
        <Testemonials/>
        <Contact />
    </div></>
  )
}

