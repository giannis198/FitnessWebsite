import { MapPin } from 'lucide-react'
import Link from 'next/link'

const Location = () => {
  return (
    <>
      <h2 className='font-bold underline'>Location</h2>
      <Link
        href='https://www.google.com/maps/dir/40.584272,22.9695529/Egnatia+95,+Thessaloniki+546+35/@40.6088135,22.9189326,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839009f78b46b:0x9f96a321f4e8d8a7!2m2!1d22.9490971!2d40.6335823?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
        className='mt-0 flex items-center'
      >
        <MapPin size={14} />
        <p className='text-xs'>Egnatias 95, Thessaloniki</p>
      </Link>
    </>
  )
}

export default Location
