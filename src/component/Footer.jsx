import React from 'react'
import rasm1 from '../img/Logo - black.png'
import rasm2 from '../img/IG icon.png'
import '../style/footer.css'
function Footer() {
  return (
    <div className='footer'>
    
        <div className="footer_wrapper">
          <ul className='footer_list1'>
            <li>Shop all</li>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Necklaces</li>
          </ul>
          <div className="footer_logo">
            <div className="logo_img">
              <img src={rasm1} alt="" />
            </div>
            <ul className='footer_list2'>
              <li>1234 Placeholder St. New York, NY</li>
              <li>Privacy Policy</li>
              <li>© 2022 D.Gregory</li>
            </ul>

          </div>
          <ul className='footer_list3'>
            <li>    ARCHive</li>
            <li>ABout</li>
            <li>Contact</li>
            <li><img src={rasm2} alt="" /></li>
          </ul>
        </div>
      </div>

    
  )
}

export default Footer
