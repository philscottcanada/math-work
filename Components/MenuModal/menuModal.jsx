import React from 'react'
import Link from "next/link";

import './menuModal.css'

function menuModal( {modalClick} ) {
  return (
    <div className='menu-container'>
        <div className="menu-close" onClick={modalClick}>X</div>
        <div className="menu-items">
            <ul onClick={modalClick}>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/donate'}>Donate</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <li><Link href={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default menuModal