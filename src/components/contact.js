import React from 'react'

export default function Contact() {
  return (
    <div className='container' id='contact'>
      <div className='contact'>
        <h1 className='section-title'>Contact</h1>
        <div className='contact-div'>
          <div className="left">
            <form>
              <input type="text" placeholder='Enter Your Name'/>
              <input type="email" placeholder='Enter Your Email'/>
              <button className='btn' >Send</button>

            </form>
          </div>
          <div className='right'>
          <div className='icons'>
                    <i className='bx bxl-facebook-circle'><a href="#">Facebook</a></i>
                    <i className='bx bxl-instagram-alt' ><a href="#">Instagram</a></i>
                    <i className='bx bxl-tiktok'  ><a href="#">Tiktok</a></i>
                </div>
          </div>
        </div>
        <p>All rights reversed to Kairo_naser</p>
      </div>
        
    </div>
  )
}
