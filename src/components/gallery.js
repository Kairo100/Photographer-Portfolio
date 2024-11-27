import React from 'react'
import img1 from "./images/gallery 1.png"
import img2 from "./images/gallery 2.png"
import img3 from "./images/gallery 3.png"
import img4 from "./images/gallery4.png"
import "./css/style.css"
export default function Gallery() {
  return (
   <>
   <div className='container' id="gallery">
    <div className='gallery'>
        <div className="title">
            <h1 className='section-title'> Gallery</h1>
        </div>
        <div className='gallery-sections'>
            <a href="" className='gallery-section-anchor' >All</a>
            <a href="" className='gallery-section-anchor'>Photos</a>
            <a href="" className='gallery-section-anchor'>Videos</a>
        </div>
        <div className='images'>
            <div className='gallery-images'>
                <img src={img1} alt="Gallery Image 1" />
            </div>
            <div className='gallery-images'>
                <img src={img2} alt="Gallery Image 2" />
                <img src={img3} alt="Gallery Image 3" />
            </div>
            <div className='gallery-images'>
                <img src={img4} alt="Gallery Image 4" />
                
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
