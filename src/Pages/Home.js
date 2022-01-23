import React from 'react'
import Carouselp from '../Components/Carousel/Carouselp'
import Top3 from '../Components/Top3/Top3'
import Img1 from "../Assets/Carousel/1.png"
import Img2 from "../Assets/Carousel/2.png"
import Img3 from "../Assets/Carousel/3.png"
import Img4 from "../Assets/Carousel/4.png"
import Img5 from "../Assets/Carousel/5.png"
import Img6 from "../Assets/Carousel/6.png"
import Img7 from "../Assets/Carousel/7.png"

function Home() {
    const photos = [
        Img1,Img2,Img3,Img4,Img5,Img6,Img7
    ]
    
    return (
        <div>
            <Carouselp photos={photos}/>
            <Top3/>
        </div>
    )
}

export default Home
