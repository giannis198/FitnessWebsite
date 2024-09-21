import About from '@/components/About'
import Contact from '@/components/Contact'
import Classes from '@/components/Classes'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import WorkingTime from '@/components/WorkingTime'

import { Separator } from '@/components/ui/separator'
import Carouzel from '@/components/Carouzel'
import Location from '@/components/Location'
import CTA from '@/components/CTA'
import Link from 'next/link'
import Header36 from '@/components/Header36'
import { Contact14 } from '@/components/Contact14'

const HomePage = () => {
  return (
    <section>
      <div className=' space-y-5 '>
        {/* <Link href='/'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16 p-0'>
              <AvatarImage src='aw-image-700.webp' className='object-cover' />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>

            <h1 className='text-2xl '>Essential Fitness</h1>
          </div>
        </Link> */}

        {/* <Carouzel /> */}
        <Header36 />
        <div className='space-y-4 md:hidden'>
          <WorkingTime />
          {/* <CTA /> */}
          <About />
        </div>

        <div className=' '>
          <Separator />
          <div className='mt-4 space-y-4'>
            <Classes />
            <Contact14 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
