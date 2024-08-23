import React, { useEffect, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/adminPLP.css'
import { URl } from '../utils/url'
function AdminPLP() {
    const [data, setData] = useState(null)
    const [update, forceUpdate] = useReducer(x => x + 1, 0)
    const [Id, setId] = useState("")
    let title = useRef()
    let up_title = useRef()
    let img = useRef()
    let up_img = useRef()
    let form = useRef()
    useEffect(() => {
        getData()
    }, [update])
    async function getData() {
        let fetchData = await fetch(`${URl}/plp`)
        let json = await fetchData.json()
        setData(json?.data)
        forceUpdate()
    }
    async function createForm(e) {
        e.preventDefault()
        let ready = {
            title: title.current.value,
            imageLink: img.current.value
        }
        await fetch(`${URl}/plp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        forceUpdate()
        title.current.value = ""
        img.current.value = ""
    }
    async function delForm(e) {
        
        await fetch(`${URl}/plp/${e.target.id}`, {
            method: 'DELETE'
        })
        forceUpdate()
    }
    async function openForm(e) {
        form.current.classList.add("open")
        setId(e.target.id)
    }
    async function updateForm(e){
        e.preventDefault()
        let ready = {
            title: up_title.current.value,
            imageLink: up_img.current.value
        }
        await fetch(`${URl}/plp/${Id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        forceUpdate()
        up_title.current.value = ""
        up_img.current.value = ""
        form.current.classList.remove("open")
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
                <div className="plpWrapper">
                    <form  onSubmit={(e) => createForm(e)} >
                        <input ref={title} type="text" placeholder='title' />
                        <input ref={img} type="text" placeholder='image' />
                        <button type="submit">create</button>
                    </form>
                    <div>
                        <form onSubmit={(e)=>updateForm(e)} className='update' ref={form} >
                            <input ref={up_title} type="text" placeholder='title' />
                            <input ref={up_img} type="text" placeholder='image' />
                            <button type="submit">update</button>
                        </form>
                    </div>

                    <div className="grid" >
                        {data?.map((item) => {
                            return (
                                <div className="gridWrapper" key={item?._id}>
                                    <h4>{item?.title}</h4>
                                    <img width={200} height={200} src={item?.imageLink} alt="" />
                                    <button id={item._id} onClick={(e) => delForm(e)}> delete</button>
                                    <button id={item._id} onClick={(e) => openForm(e)}>update</button>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminPLP
