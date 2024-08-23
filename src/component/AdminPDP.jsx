import React, {  useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { URl } from '../utils/url'

function AdminPDP() {

  let title = useRef()
  let desc = useRef()
  let bg = useRef()
  let image = useRef()
  let sign = useRef() 
  async function handleSubmit(e) {
    e.preventDefault()
    let ready = {
      title: title.current.value,
      description: desc.current.value,
      bg_image: bg.current.value,
      imageLink: image.current.value,
      signature_image: sign.current.value
    }
    await fetch(`${URl}/PDP/66a71affb138ce1ab4f8d14d`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(ready)
      
    })
  }

  

  return (
    <div>
      <header className='adminHeader'>
        <NavLink to='/admin'>Home page admin</NavLink> <br />
        <NavLink to='/adminCategory'>Category</NavLink> <br />
        <NavLink to='/adminProducts'>Products</NavLink>
        <NavLink to='/adminPLP'>PLP</NavLink>
        <NavLink to='/adminPDP'>PDP</NavLink>

      </header>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}  >
          <input ref={title} type="text" placeholder='titile' />
          <input ref={desc} type="text" placeholder='description' />
          <input ref={bg} type="text" placeholder='bg image' />
          <input ref={image} type="text" placeholder='image ' />
          <input ref={sign} type="text" placeholder='signature ' />
          <button type="submit">update</button>
        </form>
   
      </div>
    </div>
  )
}

export default AdminPDP
