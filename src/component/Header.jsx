import React, { useRef } from 'react'
import rasm from '../img/Logo.png'
import '../style/header.css'
import burger from '../img/Hamburger_icon.svg.webp'
import avatar from '../img/avatar.png'
import black_logo from '../img/black_logo.png'
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
  let Burger = useRef()
  let Avatar_img = useRef()
  let Burger_img = useRef()

  let Avatar = useRef()
  async function open1() {
    Burger.current.classList.add("open")

  }
  async function open2() {
    Avatar.current.classList.add("open")

  }
  function del() {
    Burger.current.classList.remove("open")
    Avatar.current.classList.remove("open")
    Burger_img.current.classList.remove("delete")
    Avatar_img.current.classList.remove("delete")

  }
  let location =useLocation()
  return (
    <div  className={location.pathname ==="/" ? "header":"other"}>
      <div ref={Burger} className="  modal1">
        <span onClick={del}>X</span>
        <ul className='modal_list1'>
          <NavLink to="/PLP"><li>Shop</li></NavLink>
          <li>About</li>
          <li>Contact</li>
          <li>Archive</li>
        </ul>
      </div>
      <div ref={Avatar} className="modal2 ">
        <span onClick={del}>X</span>
        <ul className='modal_list2'>
          <li>Search</li>
          <NavLink to="/sign"><li>Sign In</li></NavLink>
          <NavLink to="/register"><li>Sign Up</li></NavLink>
          <li>Cart (0)</li>
        </ul>
      </div>
      <div className="header_wrapper">
        <div className='b_l' >
          <div ref={Burger_img} className="burger_logo">
            <img onClick={open1} className='burger' width={50} height={50} src={burger} alt="" />
          </div>
        </div>
        <ul className='header_list header_content'>
          <NavLink to="/PLP"><li>Shop</li></NavLink>
          <li>About</li>
          <li>Contact</li>
          <li>Archive</li>
        </ul>
        <div className="logo">
          <NavLink to="/"> <img src={location.pathname=== "/" ? rasm:black_logo } alt="" /></NavLink>
         
        </div>
        <div className='avatar_logo'>
          <img onClick={open2} ref={Avatar_img} width={50} height={50} className='avatar' src={avatar} alt="" />
        </div>


        <ul className='header_list header_avatar'>
          <li>Search</li>
          <NavLink to="/sign"><li>Sign In</li></NavLink>
          <NavLink to="/register"><li>Sign Up</li></NavLink>
          <li>Cart (0)</li>
        </ul>
      </div>



    </div>
  )
}

export default Header
