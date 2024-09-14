import Image from 'next/image'
import img from '../public/main.webp'
import Link from 'next/link'
import Social from './Social'

const Navbar = () => {
  return (
    <nav className='flex w-full flex-col items-center justify-center space-y-4 rounded-lg'>

      <Link href='/'>
        <Image
          src={img}
          alt='Essential fitness'
          className='rounded-lg object-cover'
        />
      </Link>
      <div className='container flex gap-x-4'>
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
          Address
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
