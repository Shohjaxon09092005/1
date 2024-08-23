import React, { useEffect, useState } from 'react'
import { URl } from '../utils/url'
import '../style/editoril.css'
function Editoril() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        let fetchData = await fetch(`${URl}/editoril`)
        let json = await fetchData.json()
        setData(json?.data[0])
    }
    return (
        <div className='editoril' style={{ backgroundImage: `url(${data?.imageLink})` }}>
            <div className="container">
                <div className="editoril_content">
                    <h2>{data?.description}</h2>
                    <p>Enter your Email</p>


                </div>
                <div className="btn">
                    <button>Sign up</button>
                </div>
            </div>

        </div>
    )
}

export default Editoril
