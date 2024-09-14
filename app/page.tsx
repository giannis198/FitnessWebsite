import About from '@/components/About'
import Contact from '@/components/Contact'
import Classes from '@/components/Classes'
import Reviews from '@/components/Reviews'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import WorkingTime from '@/components/WorkingTime'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import Carouzel from '@/components/Carouzel'
import Location from '@/components/Location'
import CTA from '@/components/CTA'

const HomePage = () => {
  return (
    <section className='py-4'>
      <div className='container space-y-6'>
        <div className='flex items-center gap-4'>
          <Avatar className='h-16 w-16 p-0'>
            <AvatarImage src='aw-image-700.webp' className='object-cover' />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>

          <h1 className='text-2xl'>Essential Fitness</h1>
        </div>
        <Carouzel />
        <div className='md:hidden'>
          <CTA />
        </div>

        <WorkingTime />
        <Separator />
        <Location />

        {/* <Classes /> */}
        <About />
        <Reviews />
        <Contact />
      </div>
    </section>
  )
}

export default HomePage
