import React from 'react'
import "./Carousel.css"
function Carouselp({img,alt}) {

    return (
        <div className={alt==0 ? "carousel-item active" : "carousel-item"}>
            <img src={img} className="d-block" alt={alt}/>
        </div>
    )
}

export default Carouselp
