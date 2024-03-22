'use client'
import React, { useState } from 'react'
import './header.css'
import Link from 'next/link'

import MenuModal from "../MenuModal/menuModal";

function header() {
  const [showModal, setShowModal] = useState(false)
  
  function modalClick(e) {
    e.stopPropagation()
    setShowModal(!showModal)
  }

  return (
    <div className='header-container'>
      {showModal ? <MenuModal modalClick={modalClick}/> : <></>}
      <ul className="list">
        <div className='logo'>
          <li className='items menu-image' onClick={modalClick}>+</li>
          <li className='items logo-image'><Link href={'/'}>MathSheets.Online</Link></li>
        </div>
        <div className='links-items'>
          <li className='items'><Link href={'/'}>Home</Link></li>
          <li className='items'><Link href={'/donate'}>Donate</Link></li>
          <li className='items'><Link href={'/contact'}>Contact</Link></li>
          <li className='items'><Link href={'/about'}>About</Link></li>
        </div>
        
      </ul>
      
    </div>
  )
}

export default header