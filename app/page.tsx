import About from '@/components/About'
import Address from '@/components/Address'
import Classes from '@/components/Classes'
import Reviews from '@/components/Reviews'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import WorkingTime from '@/components/WorkingTime'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

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
        <div className='space-y-2'>
          <WorkingTime />
          <Link
            href='https://www.google.com/maps/dir/40.584272,22.9695529/Egnatia+95,+Thessaloniki+546+35/@40.6088135,22.9189326,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839009f78b46b:0x9f96a321f4e8d8a7!2m2!1d22.9490971!2d40.6335823?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
            className='flex items-center space-x-1'
          >
            <MapPin size={14} />
            <p className='text-xs'>Egnatias 95, Thessaloniki</p>
          </Link>
        </div>

        <Classes />
        <About />
        <Reviews />
        <Address />
      </div>
    </section>
  )
}

export default HomePage
