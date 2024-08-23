import React, { useEffect, useRef, useState } from 'react'
import { URl } from '../utils/url'

function AdminProductFeature() {
    const [pro, setPro] = useState(null)
    let title = useRef()
    useEffect(() => {
        getPro()

    }, [])
    async function getPro() {
        let fetchPro = await fetch(`${URl}/products`)
        let json = await fetchPro.json()
        setPro(json?.data)
    }
    function selectPro(e) {
        e.target.classList.add("selected")
    }
    async function handleSubmit(e) {
        e.preventDefault()
        let selectedProId = [

        ]
        let ready = {
            title: title.current.value,
            product_ref_id:selectedProId
        };

        let allSelectedPro = document.querySelectorAll(".selected")
        allSelectedPro.forEach((item) => {
            selectedProId.push(item.id)
        })
        console.log(selectedProId);
        await fetch(`${URl}/product-features/669795e9be42387d8060942d`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ready)


        })
    }
    return (
        <div>
            <h2>Product  Feature</h2>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input ref={title} type="text" placeholder='title' />
                <div className="wrapper">
                    {pro?.map((item) => {
                        return (
                            <div onClick={(e) => selectPro(e)} className='card' id={item._id} key={item._id}>{item.name}</div>
                        );
                    })}

                </div>
                <button>Update</button>

            </form>
        </div>
    )
}

export default AdminProductFeature
