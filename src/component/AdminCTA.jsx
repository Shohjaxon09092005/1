import React, { useRef } from 'react'
import { URl } from '../utils/url'
function AdminCTA() {
    let desc = useRef()
    let rasm = useRef()
    async function handeSubmit(e) {
        e.preventDefault()
        let ready = {
            description: desc.current.value,
            imageLink: rasm.current.value
        }
        await fetch(`${URl}/editorial/66a0d332d0be52c0e61a01b6`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
    <div>
        <h2>Admin CTA</h2>
            <form onSubmit={(e) => handeSubmit(e)}>
                <input ref={desc} type="text" placeholder='desc' />
                <input ref={rasm} type="text" placeholder='imageLink' />
                <button type="submit">Update</button>
            </form>
    </div>
  )
}

export default AdminCTA
