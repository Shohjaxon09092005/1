import React, { useEffect, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { URl } from '../utils/url'
function AdminCategory() {
    const [cat, setCat] = useState(null)
    const [id, setId] = useState('')
    const [update, forceUpdate] = useReducer(x => x + 1, 0)
    let create_name = useRef()
    let update_name = useRef()
    let update_form = useRef()
    useEffect(() => {
        getCat()
    }, [update])
    async function getCat() {
        let fetchCat = await fetch(`${URl}/category`)
        let json = await fetchCat.json()
        setCat(json.data);
        forceUpdate()
    }

    async function CreateCategory(e) {
        e.preventDefault()
        let ready = {
            cat_name: create_name.current.value
        }
        await fetch(`${URl}/category`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        });
        forceUpdate()
        create_name.current.value = " "
        alert("siz categoriyadan muvaffaqiyatli o'tdingiz")
    }
    async function UpdateCategory(e) {
        e.preventDefault()
        let ready = {
            cat_name: update_name.current.value
        };
        await fetch(`${URl}/category/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        });
        forceUpdate()
        update_name.current.value = " "
        update_form.current.classList.remove('open')
    }

    function openEditForm(e) {
        update_form.current.classList.add('open')

        setId(e.target.id)

    }
    async function deleteCat(e) {
        await fetch(`${URl}/category/${e.target.id}`, {
            method: "DELETE"

        })
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
                    <form onSubmit={(e) => CreateCategory(e)} >
                        <input ref={create_name} type="text" placeholder='category name' />
                        <button type="submit">Create a   category</button>
                    </form>
                    <div>
                        <form ref={update_form} className='updateForm' onSubmit={(e) => UpdateCategory(e)} >
                            <input ref={update_name} type="text" placeholder='category name' />
                            <button type="submit">Update a   category</button>
                        </form>
                    </div>
                    <div className="grid">
                        {cat?.map((item) => {
                            return (
                                <div className="card" key={item._id}>
                                    <h4>{item?.cat_name}</h4>

                                    <button id={item._id} onClick={(e) => deleteCat(e)}>Del</button>
                                    <button id={item._id} onClick={(e) => openEditForm(e)}>Edit</button>
                                </div>
                            )
                        })}


                    </div>
                </div>

            </div>

        </div>
    )
}

export default AdminCategory
