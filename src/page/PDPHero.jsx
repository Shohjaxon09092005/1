import React, { useEffect, useReducer, useRef, useState } from 'react'
import { URl } from '../utils/url'
import { useParams } from 'react-router-dom'
function PDPHero() {
    const [data, setData] = useState(null)
    const [update, forceUpdate] = useReducer(x => x + 1, 0)
    let parBook = useParams()
    useEffect(() => {
        getData()
    }, [update])
    async function getData() {
        let fetchData = await fetch(`${URl}/products`)
        let json = await fetchData.json()
        setData(json?.data)
    }
    // const [hero, setHero] = useState(null)
    // useEffect(() => {
    //     getHero()
    // }, [])
    // async function getHero() {
    //     let fetchHero = await fetch(`${URl}/plp`)
    //     let json = await fetchHero.json()
    //     setHero(json?.data)
    // }
    let PDPlocal = localStorage.getItem("proId")
    let pdpPro = data?.filter((item) => item?._id === PDPlocal)
    // let pdpPro2=hero?.filter((item)=>item?._id===PDPlocal)

    let PDPmodal = useRef()
    let count = useRef()
    async function PDPopen() {
        PDPmodal.current.classList.add("PDP_open")
        let ready = {
            product_ref_id: PDPlocal,
            user_ref_id: parBook.ID,
            count: count.current.value
        }
        await fetch(`${URl}/bookmark`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        forceUpdate()

    }
    const [bookmark, setBookmark] = useState(null)
    useEffect(() => {
        bookmarkData()
    }, [update])
    async function bookmarkData() {
        let fetchBook = await fetch(`${URl}/bookmark`)
        let json = await fetchBook.json()
        setBookmark(json?.data)
        forceUpdate()

    }
    let filterBook = bookmark?.filter((item) => item.user_ref_id?._id === parBook.ID)
    function delModal() {
        PDPmodal.current.classList.remove("PDP_open")

    }
    // const [id,setId]=useState(null)
    async function remove(e) {
       console.log(e.target.id);
       
     await fetch(`${URl}/bookmark/${e.target.id}`,{
            method:"DELETE",
           
        })
        forceUpdate()

        //    setId(e.target.id)


        // let IdFilter = bookmark?.filter((bor) => bor?._id === e.target.id)
        // console.log(IdFilter);
   

    }



    async function chek(e) {
        e.preventDefault()
        let ready = {
            product_ref_id: PDPlocal,
            user_ref_id: parBook.ID,
            count: count.current.value
        }
        await fetch(`${URl}/bookmark/buy/${parBook.ID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        forceUpdate()
    }





    return (
        <div className='PDP_hero'>
            <div className="container">
                <div ref={PDPmodal} className="PDP_modal">

                    <div className="PDP_modal_wrapper">
                        <div className="PDP_modal_card">
                            <div className="PDP__modal_content">


                                {filterBook?.map((c) => {
                                    return (
                                        <div key={c._id}>
                                            <img width={200} height={200} src={c.product_ref_id.imageLink} alt="" />
                                            <h2>{c.product_ref_id.name}</h2>
                                            <p>${c.product_ref_id.price}</p>
                                            <h4 key={c?._id}>SIZE {c?.count}</h4>
                                            <h5 onClick={(e) => remove(e)} id={c?._id}>remove</h5>

                                        </div>

                                    )
                                })}



                            </div>
                        </div>
                        <button onClick={(e) => chek(e)} className='chek'>Checkout</button>

                    </div>
                    <button className='del' onClick={delModal}>X</button>
                </div>
                <div className="PDP_hero_wrapper">
                    {pdpPro?.map((item) => {
                        return (
                            <div className="PDP_hero_img" key={item?._id} >
                                <img src={item?.imageLink} alt="" />

                            </div>
                        )
                    })}

                    {pdpPro?.map((ali) => {
                        return (
                            <div key={ali?._id} className="PDP_hero_content">


                                <h2>{ali?.name}</h2>
                                <h4>${ali?.price}</h4>
                                <input ref={count} type="number" placeholder='Select Size' />
                                <button onClick={PDPopen}>Add to cart</button>

                            </div>
                        )
                    })}

                </div>
            </div>


        </div>
    )
}

export default PDPHero
