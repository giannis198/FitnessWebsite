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

const HomePage = () => {
  return (
    <section className='py-4'>
      <div className='container space-y-5'>
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16 p-0'>
              <AvatarImage src='aw-image-700.webp' className='object-cover' />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>

            <h1 className='text-2xl '>Essential Fitness</h1>
          </div>
        </Link>

        <Carouzel />
        <div className='md:hidden'>
          <CTA />
        </div>

        <WorkingTime />
        <Separator />
        <Classes />
        <Location />

        <About />
        {/* <Reviews /> */}
        <Contact />
      </div>
    </section>
  )
}

export default HomePage
