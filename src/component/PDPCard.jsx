import React from 'react'
import Product from './Product'
import '../style/pdp.css'
function PDPCard() {
    return (
        <div className='pdpCard'>
            <div className="container">
                <h2>You might also like</h2>
                <Product />
            </div>

        </div>
    )
}

export default PDPCard
