import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'
import { useNavigate, useParams } from 'react-router-dom'

function PLPGrid() {
    const [data, setData] = useState(null)
    const [users, setUsers] = useState(null)
    // const [Id, setId] = useState(null)
    let nav = useNavigate()
    let par = useParams()
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/products`)
        let json = await fetchData.json()
        setData(json?.data)
    }
    const [hero, setHero] = useState(null)
    useEffect(() => {
        getHero()
    }, [])
    async function getHero() {
        let fetchHero = await fetch(`${URl}/plp`)
        let json = await fetchHero.json()
        setHero(json?.data)
    }
    useEffect(() => {
        getUsers()
    }, [])
    async function getUsers() {
        let fetchUsers = await fetch(`${URl}/users`)
        let json = await fetchUsers.json()
        setUsers(json.data)

    }
    async function card1(e) {
        e.preventDefault()
        console.log(e.target.id);
        // setId(e.target.id)
        localStorage.setItem("proId", e.target.id)
        let find = users?.find((item) => item._id === par.ID)
        if (find) {
            nav(`/PDP/${find._id}`)

        } else {
            alert("Siz ro'yxatdan o'tmagansiz")
            nav("/register")
        }




    }
    return (
        <div className='plp_grid'>
            <div className="container">
                <div className="plp_wrapper">

                    {hero?.map((tayyor) => {
                        return (
                            <div onClick={(e) => card1(e)} className="plp_card1" key={tayyor?._id}>
                                <img id={tayyor?._id} src={tayyor?.imageLink} alt="" />
                                <div className="plp_content1">
                                    <h2>{tayyor?.title}</h2>
                                    <button id={tayyor?._id} onClick={(e) => card1(e)}>CTA button</button>
                                </div>
                            </div>
                        )


                    })}



                    {data?.map((item) => {
                        return (
                            <div className="plp_card" key={item?._id}>
                                <img id={item?._id} onClick={(e) => card1(e)} width={353} height={350} src={item?.imageLink} alt="" />
                                <div className="plp_content">

                                    <h4>{item?.name}</h4>
                                    <p>{item?.price}</p>
                                    <h3 >New collection</h3>
                                </div>
                            </div>
                        )

                    }, [])}





                </div>
            </div>

        </div>
    )
}

export default PLPGrid
