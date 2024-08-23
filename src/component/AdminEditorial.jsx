import React, { useRef } from 'react'
import { URl } from '../utils/url'
function AdminEditorial() {
    let title = useRef()
    let desc = useRef()
    let rasm = useRef()
    async function handeSubmit(e) {
        e.preventDefault()
        let ready = {
            title: title.current.value,
            description: desc.current.value,
            imageLink: rasm.current.value
        }
        await fetch(`${URl}/editorial/66a0cf90d0be52c0e619df9d`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
    return (
        <div>
            <h2>Admin editorial</h2>
            <form onSubmit={(e) => handeSubmit(e)}>
                <input ref={title} type="text" placeholder='title' />
                <input ref={desc} type="text" placeholder='desc' />
                <input ref={rasm} type="text" placeholder='imageLink' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminEditorial
