import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/navbar/pilouLogo.png'

export default function NavBar() {
  return (
    <div className='bg-[#e79fa1] flex flex-row justify-between items-center p-5 sticky top-0 z-50'>
      <Image alt='logo' src={logo} className=' w-20' />
      <div>
        <Link className='hover:text-pink-500 mx-4' href="/" title="Home">Home </Link>
        <Link className='hover:text-pink-500 mr-4' href="/formulario" title="Formulario" >Form </Link>
        <Link className='hover:text-pink-500 mr-4' href="/xno" title="xno" >Xno </Link>
      </div>

    </div>
  )
}
