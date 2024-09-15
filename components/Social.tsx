'use client'

import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'

const Social = () => {
  return (
    <>
      <Link href='tel:+302315154414'>
        <div className='flex items-center space-x-1'>
          <Phone size={24} className='hidden md:block' />
          <Phone size={14} className='md:hidden' />
          <p className='text-sm md:text-lg'>+30 2315154414</p>
        </div>
      </Link>
      <Link href='mailto:+302315154414'>
        <div className='flex items-center space-x-1'>
          <Mail size={24} className='hidden md:block' />
          <Mail size={14} className='md:hidden' />
          <p className='text-sm md:text-lg'>essentialfitness00@hotmail.com</p>
        </div>
      </Link>
    </>
  )
}

export default Social
