import React, { useEffect, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { URl } from '../utils/url'
function AdminProducts() {
  const [cat, setCat] = useState(null)
  const [pro, setPro] = useState(null)
  const [id, setId] = useState("")
  const [update, forceUpdate] = useReducer(x=>x+1,0)
  let c_name = useRef()
  let c_count = useRef()
  let c_img = useRef()
  let c_price = useRef()
  let c_size = useRef()
  let c_desc = useRef()
  let c_detail = useRef()
  let c_shipping = useRef()
  let update_name = useRef()
  let update_count = useRef()
  let update_img = useRef()
  let update_price = useRef()
  let update_size = useRef()
  let update_desc = useRef()
  let update_detail = useRef()
  let update_shipping = useRef()
  let c_cat = useRef()
  let update_cat = useRef()
  let update_form = useRef()
  useEffect(() => {
    getCat()
    getPro()
  }, [update])
  async function getCat() {
    let fetchCat = await fetch(`${URl}/category`)
    let json = await fetchCat.json()
    setCat(json.data);
    forceUpdate()
  }
  async function getPro() {
    let fetchCat = await fetch(`${URl}/products`)
    let json = await fetchCat.json()
    setPro(json.data);
    forceUpdate()
  }
  async function CreateProduct(e) {
    e.preventDefault()
    let ready = {
      name: c_name.current.value,
      count: c_count.current.value,
      imageLink: c_img.current.value,
      price: c_price.current.value,
      size: c_size.current.value,
      description: c_desc.current.value,
      details: c_detail.current.value,
      shipping: c_shipping.current.value,
      cat_ref_id: c_cat.current.value
    }
    await fetch(`${URl}/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready),
    });
    forceUpdate()
  }
  async function updateProduct(e) {
    e.preventDefault()
    let ready = {
      name: update_name.current.value,
      count: update_count.current.value,
      imageLink: update_img.current.value,
      price: update_price.current.value,
      size: update_size.current.value,
      description: update_desc.current.value,
      details: update_detail.current.value,
      shipping: update_shipping.current.value,
      cat_ref_id: update_cat.current.value
    }
    await fetch(`${URl}/products/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ready),
    })
    forceUpdate()
    update_form.current.classList.remove("open")
  }
  function openEditForm(e) {
    setId(e.target.id)
    update_form.current.classList.add("open")
  }
  async function deleteEditForm(e) {
    await fetch(`${URl}/products/${e.target.id}`, {
      method: "DELETE"
    });
    forceUpdate()
  
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
        <div className="adminCatWrapper">
          <form onSubmit={(e) => CreateProduct(e)} >
            <input ref={c_name} type="text" placeholder='name' />
            <input ref={c_count} type="number" placeholder='count' />
            <input ref={c_img} type="text" placeholder='img' />
            <input ref={c_price} type="number" placeholder='price' />
            <input ref={c_size} type="number" placeholder='size' />
            <input ref={c_desc} type="text" placeholder='description' />
            <input ref={c_detail} type="text" placeholder='details' />
            <input ref={c_shipping} type="text" placeholder='shipping' />
            <select ref={c_cat}>
              {cat?.map((item) => {
                return (
                  <option key={item?._id} value={item?._id}>{item.cat_name}</option>
                )
              })}
            </select><br />
            <button type="submit">Create Product</button>


          </form>
          <div>
            <form ref={update_form} className='updateForm' onSubmit={(e) => updateProduct(e)}>
              <input ref={update_name} type="text" placeholder='name' />
              <input ref={update_count} type="number" placeholder='count' />
              <input ref={update_img} type="text" placeholder='img' />
              <input ref={update_price} type="number" placeholder='price' />
              <input ref={update_size} type="number" placeholder='size' />
              <input ref={update_desc} type="text" placeholder='description' />
              <input ref={update_detail} type="text" placeholder='details' />
              <input ref={update_shipping} type="text" placeholder='shipping' />
              <select ref={update_cat}>
                {cat?.map((item) => {
                  return (
                    <option key={item?._id} value={item?._id}>{item.cat_name}</option>
                  )
                })}
              </select><br />
              <button type="submit">Update Product</button>


            </form>
          </div>
          <div className="grid">

            {pro?.map((item) => {
              return (<div className="card" key={item?._id}>
                <img width={50} src={item?.imageLink} alt="" />
                <h4>{item?.name}</h4>
                <button id={item._id} onClick={(e) => openEditForm(e)}>edit</button>
                <button id={item._id} onClick={(e) => deleteEditForm(e)}>delete</button>

              </div>
              )
            })}

          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminProducts
