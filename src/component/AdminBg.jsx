import React, { useRef } from 'react'
import { URl } from '../utils/url'
function AdminBg() {
    let rasm = useRef()
    async function handleSubmit(e){
        e.preventDefault()
        let ready={
            imageLink:rasm.current.value
        }
        await fetch(`${URl}/bgimage`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(ready)
        })
    }
  return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input ref={rasm} type="text" placeholder='bgImage' />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default AdminBg
