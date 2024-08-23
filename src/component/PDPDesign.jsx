import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'
import '../style/pdp.css'
function PDPDesign() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        let fetchData=await fetch(`${URl}/pdp`)
        let json=await fetchData.json()
        setData(json?.data[0])

    }
    
  return (
    <div className='design' style={{backgroundImage:`url(${data?.bg_image})`}}>
      <div className="container">
        <div className="design_wrapper">
            <div className="design_img">
                <img src={data?.imageLink} alt="" />
            </div>
            <div className="design_content">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <img src={data?.signature_image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PDPDesign
