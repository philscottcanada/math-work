import React, {useEffect, useState} from 'react'
import Link from "next/link";

import './menuModal.css'

function menuModal( {modalClick} ) {

  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(()=>{
    setIsLoaded(true)
  }, [])

  return (
    <div className={isLoaded?'menu__container-loaded':'menu__container'}>
        <div className="menu__close" onClick={modalClick}>X</div>
        <div className="menu__items">
            <ul onClick={modalClick}>
                <li className='menu__link'><Link href={'/'}>Home</Link></li>
                <li className='menu__link'><Link href={'/donate'}>Donate</Link></li>
                <li className='menu__link'><Link href={'/contact'}>Contact</Link></li>
                <li className='menu__link'><Link href={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default menuModal