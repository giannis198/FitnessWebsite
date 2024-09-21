import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import map from '../public/map.png'

const Location = () => {
  return (
    <section className='space-y-1'>
      <h2 className='font-bold underline md:text-xl'>Τοποθεσία</h2>
      <div>
        <Link
          className='space-y-1'
          href='https://www.google.com/maps/dir/40.584272,22.9695529/Egnatia+95,+Thessaloniki+546+35/@40.6088135,22.9189326,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839009f78b46b:0x9f96a321f4e8d8a7!2m2!1d22.9490971!2d40.6335823?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
        >
          <div className='mt-0 flex items-center space-x-2'>
            <MapPin size={24} className=' hidden md:block' />
            <MapPin size={14} className=' md:hidden' />
            <p className='text-sm md:text-lg'>Εγνατίας 95, Θεσσαλονίκη</p>
            <ArrowUpRight size={24} className=' hidden md:block' />
            <ArrowUpRight size={14} className=' md:hidden' />
          </div>

          <div
            className=' h-1/4
        '
          >
            <Image src={map} alt='map' className='mx-auto object-cover' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Location
