import React from 'react'

function PLPInput() {
    return (
        <div className='plp_input'>
            <div className="container">
                <div className="plp_wrapper">
                    <form >
                        <h4>Sort by</h4>

                        <select >
                            <option value="">
                                Select
                            </option>
                        </select>
                    </form>
                    <form >
                        <h4>Collections</h4>

                        <select  >
                            <option value="">
                                Select
                            </option>

                        </select>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default PLPInput
