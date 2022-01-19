import React from 'react'
import Carouselp from '../Components/Carousel/Carouselp'
import Top3 from '../Components/Top3/Top3'

function Home() {
    const photos = [
        "https://img.zcool.cn/community/01b04859b24d65a8012028a9cf9007.jpg@2o.jpg",
        "https://img.zcool.cn/community/01b04859b24d65a8012028a9cf9007.jpg@2o.jpg",
        "https://img.zcool.cn/community/01b04859b24d65a8012028a9cf9007.jpg@2o.jpg"
    ]
    
    return (
        <div>
            <Carouselp photos={photos}/>
            <Top3/>
        </div>
    )
}

export default Home
