import Image from 'next/image'
import img from '../public/main.webp'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full items-center justify-center space-y-4 rounded-lg'>
      <Link href='/'>
        <Image src={img} alt='Essential fitness' />
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
