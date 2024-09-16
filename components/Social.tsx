'use client'

import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'

const Social = () => {
  return (
    <div className='flex flex-col gap-2 pt-2'>
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
      <div className=''>
        <div className='flex items-center space-x-4'>
          <Link href='https://www.facebook.com/profile.php?id=61550994177401'>
            <Image
              src={facebook}
              alt='facebook'
              className='h-6 w-6 md:block md:h-10 md:w-10'
            />
          </Link>

          <Link href='https://www.instagram.com/essential_fitness__?igsh=cm5meTdscnZpZHhk'>
            <Image
              src={instagram}
              alt='instagram'
              className='h-6 w-6 md:block md:h-10 md:w-10'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Social
