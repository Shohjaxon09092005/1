import React from 'react'
import '../style/admin.css'
import { NavLink } from 'react-router-dom'
import AdminHero from '../component/AdminHero'
import AdminProductFeature from '../component/AdminProductFeature'
import AdminBg from '../component/AdminBg'
import AdminEditorial from '../component/AdminEditorial'
import AdminCTA from '../component/AdminCTA'
function Admin() {
  return (
    <div>
        <header className='adminHeader'>
            <NavLink to='/admin'>Home page admin</NavLink> <br />
            <NavLink to='/adminCategory'>Category</NavLink>  <br />
            <NavLink to='/adminProducts'>Products</NavLink>
            <NavLink to='/adminPLP'>PLP</NavLink>
            <NavLink to='/adminPDP'>PDP</NavLink>

        </header>
        <div className="container">
          <AdminHero/>
          <AdminProductFeature/>
          <AdminBg/>
          <AdminEditorial/>
          <AdminCTA/>
        </div>
    </div>
  )
}

export default Admin
