import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'

function PLPCategory() {

    const [data, setData]=useState(null)
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        let fetchData=await fetch(`${URl}/category`)
        let json=await fetchData.json()
        setData(json?.data)
    }
  return (
    <div className='plpCategory'>
      <div className="container">
      
          <ul className='plp_list'>
         <button>ALL</button>
            {data?.map((item)=>{
                return(
                    <li key={item?._id}>{item?.cat_name}</li>
                )
            })}
          </ul>
        

      </div>
    </div>
  )
}

export default PLPCategory
