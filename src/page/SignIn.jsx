import React, { useEffect, useRef, useState } from 'react'
import { URl } from '../utils/url';
import '../style/signIn.css'
import { useNavigate } from 'react-router-dom';
function SignIn() {
    let password = useRef()
    let email = useRef()
    const [users, setUsers] = useState(null)
    let nav = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])
    async function getUsers() {
        let fetchUsers = await fetch(`${URl}/users`)
        let json = await fetchUsers.json()
        setUsers(json.data)

    }
    async function sign(e) {
        e.preventDefault()

        let emailUsers = users?.find((item) => item.email === email.current.value)


        if (emailUsers?.password === password.current.value) {


            nav(`/login/${emailUsers._id}`)




        } else {

            alert("nimadir noto'g'ri")
            nav("/register")

        }
    }
    return (
        <div className='signIn'>

            <div className="container">
                <form onSubmit={(e) => sign(e)} className='sign_form' >
                    <h1>Sign In</h1>
                    <input ref={email} type="text" placeholder='email' />
                    <input ref={password} type="text" placeholder='password' />
                    <button type="submit">Sign In</button>
                </form>
            </div>


        </div>
    )
}

export default SignIn
