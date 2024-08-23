import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'

import '../style/product.css'
import rasm from '../img/Union.png'
function Product() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/product-features`)
        let json = await fetchData.json()
        setData(json?.data[0])
    }
    return (
        <div className='product'>
            <div className="container">
                <div className="product_wrapper">
                    <h2>{data?.title}</h2>

                    <div className="product_grid">
                        {data?.product_ref_id?.map((item) => {
                            return (
                                <div className="product_card" key={item._id} >
                                    <img className='bg' src={rasm} alt="" />
                                    <div className="product_img">
                                        <img  height={250} width={200} src={item?.imageLink} alt="" />
                                    </div>

                                    <div className="product_content">
                                        <h4>{item?.name}</h4>
                                        <h5>${item?.price}</h5>
                                        <h3>New collection</h3>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                    <button>Shop All</button>



                </div>
            </div>

        </div>
    )
}

export default Product
