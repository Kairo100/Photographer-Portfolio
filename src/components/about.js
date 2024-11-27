import React from 'react'
import './css/style.css'
import about from './images/about.png'
export default function About() {
  return (
    <div>
         {/* about section */}
         <div className='container' id="about">
          <div className='about'>
            <div className='right'>
                <img src={about} alt="about-img" className='about-img'></img>
            </div>
            <div className='left'>
                <h1 className='section-title'>About</h1>
                <p className='sectiom-para'>Hi, I’m [Your Name], a passionate videographer with a love for storytelling 
                    through the lens. With years of experience capturing everything from 
                    cinematic short films to dynamic corporate videos, my mission is to
                     bring your vision to life in ways that resonate and inspire.
                   Whether it’s a wedding, an event, or a brand campaign, I believe every 
                   frame should tell a story. I’m not just here to film, but to craft moments
                    that make an impact. My approach blends creativity with technical 
                    expertise to create visual experiences that stand out.
                    When I'm not behind the camera, you’ll find me experimenting with new
                     techniques, exploring the world through my lens, or collaborating
                      with other creatives to push the boundaries of what's possible. 
                      Let's create something unforgettable together.</p>
            </div>
          </div>
        </div>
       
    </div>
  )
}
