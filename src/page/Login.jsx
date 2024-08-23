import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { URl } from '../utils/url';
import '../style/user.css'
function Login() {
    let id = useParams()
    console.log(id);
    const [users, setUsers] = useState(null)
    useEffect(() => {
        getUsers()
    }, [])
    async function getUsers() {
        let fetchUsers = await fetch(`${URl}/users`)
        let json = await fetchUsers.json()
        setUsers(json?.data)

    }
    let fountUsers = users?.find((item) => item._id === id.ID)
    console.log(fountUsers);

    return (

        <div>
            <div className="container">
                <div className="user_content">
                    <h1>User page to Welcome</h1>
                    <h2>{fountUsers?.username}</h2>
                    <h3>{fountUsers?.email}</h3>
                    <NavLink to={`/PLP/${fountUsers?._id}`}>Shopping</NavLink>

                </div>


            </div>

        </div>
    )
}

export default Login
