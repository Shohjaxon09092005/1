import React, { useRef } from 'react'
import { URl } from '../utils/url'
function AdminHero() {
    let title = useRef()
    let bgimg = useRef()
    async function handleSubmit(e) {
        e.preventDefault()
        let ready = {
            title: title.current.value,
            imageLink:bgimg.current.value
        }
        await fetch(`${URl}/headers/66979fca46152823346309c4`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    return (
        <div>
            <h2>Hero section    </h2>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input ref={title} type="text" placeholder='title' />
                <input ref={bgimg} type="text" placeholder='bgimg' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminHero
