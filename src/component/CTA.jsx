import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'
import '../style/cta.css'
import rasm1 from '../img/Line 1.png'
import rasm2 from '../img/Line 2.png'
import rasm3 from '../img/Line 3.png'
import rasm4 from '../img/Line 4.png'
function CTA() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/editorial`)
        let json = await fetchData.json()
        setData(json?.data[0])
    }
    return (
        <div className='cta'>
           
                <img className='img1' src={rasm1} alt="" />


                <img className='img2' src={rasm2} alt="" />


                <img className='img3' src={rasm3} alt="" />

                <img className='img4' src={rasm4} alt="" />


                <div className="cta_wrapper">
                    <img src={data?.imageLink} alt="" />
                    <div className="cta_content">
                        <h2>{data?.title}</h2>
                        <p>{data?.description}</p>
                        <button>Shop the collection</button>
                    </div>
                </div>

            </div>

      
    )
}

export default CTA
