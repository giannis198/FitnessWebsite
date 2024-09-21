import Image from 'next/image'
import img from '../public/main.webp'
import Link from 'next/link'
import Social from './Social'

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-center space-y-4 rounded-lg bg-[#EEE8D4]'>
      <Link href='/'>
        <Image
          src={img}
          alt='Essential fitness'
          className='rounded-lg object-contain'
        />
      </Link>
      {/* <div className='container flex space-x-4'>
        <Link href='#classes' className='text-sm'>
          Classes
        </Link>
        <Link href='#about' className='text-sm'>
          About
        </Link>
        <Link href='#reviews' className='text-sm'>
          Reviews
        </Link>
        <Link href='#address' className='text-sm'>
          Contact
        </Link>
      </div> */}
    </nav>
  )
}

export default Navbar
