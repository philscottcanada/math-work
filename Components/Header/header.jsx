import React from 'react'
import './header.css'
import Link from 'next/link'

function header() {
  return (
    <div className='header-container'>
      <ul className="list">
        <div className='logo'>
          <li className='items'><Link href={'/'}>Logo</Link></li>
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