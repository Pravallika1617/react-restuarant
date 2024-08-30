import React from 'react'
import { Link } from 'react-router-dom'

function MenuBtn() {
    return (
        <div>
            <Link to='/menu'>
                <button type="button" className='btn btn-warning btn-lg'>Our Full Menu</button>
            </Link>
        </div>
    )
}

export default MenuBtn
