import React,{ useEffect, useState } from 'react'
import { URl } from '../utils/url'
function BgImage() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/bgImage`)
        let json = await fetchData.json()
        setData(json?.data[0])
    }
  return (
    <div className='image' style={{backgroundImage:`url(${data?.imageLink})`}}>
      
    </div>
  )
}

export default BgImage
