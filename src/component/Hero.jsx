import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'
import '../style/hero.css'
import rasm from '../img/arrow.png'
function Hero() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/headers`)
        let json = await fetchData.json()
        setData(json?.data[0])
    }
    return (
        <div className='hero' style={{ backgroundImage: `url(${data?.imageLink})` }}>
            <div className="container">
                <div className="hero_wrapper">

                    <div className="hero_content">
                        <h2>{data?.title}</h2>
                        <button>Shop Collection</button>
                    </div>




                </div>
                <img src={rasm} alt="" />


            </div>

        </div>
    )
}

export default Hero
