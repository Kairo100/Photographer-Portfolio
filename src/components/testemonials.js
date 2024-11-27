import React from 'react'
import profile from "./images/testemonial.png"

export default function Testemonials() {
  return (
    <div className='container' id="testimonials">
        <div className='testemonials'>
            <h1 className="section-title">Testemonials</h1>
            <div className="testemonials-div">
                <img src={profile} alt="profile-img" className='profile-img'/>
                <h3>Emily</h3>
                <small>emily@gmail.com</small>
                <p>Already have footage? I offer professional
                     video editing services that transform raw footage into polished,
                     cinematic content. From color correction to sound 
                     design, I ensure every detail is perfect.</p>
            </div>
        </div>
    </div>
  )
}
