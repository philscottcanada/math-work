import React from 'react'
import Image from 'next/image'

function Test() {
  return (
    <div>
        <Image src={'/MultiplicationTable.jpeg'} alt='Times Table Image' width={1080} height={640}></Image>
    </div>
  )
}

export default Test