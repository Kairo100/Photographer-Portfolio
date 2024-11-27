import React, { useState } from 'react'
import logo from './images/logo.jfif'


export default function Nav() {

    const [toggle, setToggle] = useState(false)
    const blurHeader = () => {
        const header = document.getElementById('header');
        // Add a class if the bottom offset is greater than 50 of the viewport
        window.scrollY >= 50 ? header.classList.add('blur-header')
                             : header.classList.remove('blur-header');
    }
    
    window.addEventListener('scroll', blurHeader);
    
  return (
    <>
    <div>
    <div class="header" id="header">
      <div class="logo">
            <a href="#home"><img src={logo} alt="" /></a>
      </div>
           
       <nav>
            <i className={`bx ${toggle ? 'bx-x' : 'bx-menu'} btn-menu`} onClick={() => {setToggle(!toggle);}}></i>
            <div className={` menu ${toggle ? 'active' : ''}`}>
                <ul className="list">
                    <li className="list-item"><a href="#about" className="list-link">About</a></li>
                    <li className="list-item"><a href="#gallery" className="list-link">gallery</a></li>
                    <li className="list-item"><a href="#services" className="list-link">services</a></li>
                    <li className="list-item"><a href="#testimonials" className="list-link">Testemonials</a></li>
                    <li className="list-item"><a href="#contact" className="list-link btn-contact">Contact</a></li>
                </ul>
            </div>
        </nav>
           
       
    </div>
    </div>
    </>
  )
}
