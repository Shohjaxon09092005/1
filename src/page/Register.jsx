import React, { useRef } from 'react'
import { URl } from '../utils/url'
import '../style/register.css'
import { useNavigate } from 'react-router-dom'
function Register() {
    let nav = useNavigate()
    let name = useRef()
    let email = useRef()
    let password = useRef()
    let date = useRef()
    async function createUser(e) {
        e.preventDefault()
        let ready = {
            username: name.current.value,
            email: email.current.value,
            password: password.current.value,
            birth_date: date.current.value
        }
        let res = await fetch(`${URl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ready)
        })
        let result = await res.json()
        console.log(result);
        if (result.message === "success") {

            nav(`/login/${result?.data?._id}`)
        }else{
            nav("/register")
            alert("Siz ro'yxatdan o'ta olmayabsiz")
        }
         localStorage.setItem("userID", result?.data?._id)


    }
    return (
        <div className='register'>
            <div className="container">

                <form className='reg_form' onSubmit={(e) => createUser(e)} >
                    <h2>Register</h2>
                    <input ref={name} type="text " placeholder='user name' />
                    <input ref={email} type="text " placeholder='user email' />
                    <input ref={password} type="text " placeholder='user password' />
                    <input ref={date} type="text " placeholder='user date' />
                    <button type="submit">Register</button>
                </form>
            </div>

        </div>
    )
}

export default Register
