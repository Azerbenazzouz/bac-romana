import React from 'react'
import CarouselC from './CarouselC.js'

function Carouselp({photos}) {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <center>
                    {photos.map((photo, i) =>{
                        return <CarouselC img={photo} alt={i} key={i}/>
                    })}
                </center>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Carouselp
