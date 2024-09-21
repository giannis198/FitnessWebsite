'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useRef } from 'react'
import img1 from '../public/img1.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.jpg'
import img5 from '../public/img5.jpg'
import img6 from '../public/img6.jpg'
import lobby from '../public/lobby.jpg'
import entrance from '../public/entrance.jpg'
import img2 from '../public/img2.jpg'
import Image from 'next/image'
import CTA from './CTA'
import { Button } from './ui/button'
import Link from 'next/link'

const images = [entrance, lobby, img1, img2, img3, img4, img5, img6]

const Header36 = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <section
      id='relume'
      className='grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0'
    >
      <div className='mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-start'>
        <h1 className='lg:text-10xl mb-5 text-4xl font-bold md:mb-6 md:text-6xl'>
          Μεταμόρφωσε το Σώμα σου με Personal Training & Pilates
        </h1>
        <p className='md:text-md'>
          Κατάκτησε τους στόχους σου με εξατομικευμένα προγράμματα personal
          training και Pilates που ενισχύουν τη δύναμη, βελτιώνουν την ευλυγισία
          και προάγουν την ευεξία. Είτε θέλεις να χτίσεις μυϊκή μάζα, να
          τονώσεις το σώμα σου ή να μειώσεις το άγχος, οι έμπειροι γυμναστές μας
          προσφέρουν καθοδήγηση σε ένα υποστηρικτικό περιβάλλον, διασφαλίζοντας
          ότι παραμένεις αφοσιωμένος και βλέπεις αποτελέσματα. Ξεκίνα το ταξίδι
          σου προς έναν πιο υγιή και δυνατό εαυτό σήμερα!
        </p>
        <div className='mt-6 flex gap-x-4 md:mt-8'>
          <CTA />
        </div>
      </div>
      <div className='space-y-2'>
        <p className='container text-lg font-bold underline md:hidden md:text-2xl'>
          Αίθουσες Γυμναστηρίου
        </p>
        <Carousel
          plugins={[plugin.current]}
          className='flex w-full'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='mx-0 px-0'>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className=''>
                  <Image src={image} alt='' />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

// const Carouzel = () => {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
//   return (
//     <section className='w-full items-center justify-between md:flex md:pr-12'>
//       <div className='flex w-full flex-col  justify-center md:w-1/3 '>
//         <p className='hidden pb-5 md:block md:text-3xl'>
//           Η αποστολή μας είναι να παρέχουμε ένα μέρος όπου η προπόνηση όλων
//           βασίζεται στις Essential ανάγκες.
//         </p>
//         <Link href='https://essentialfitnessskg.setmore.com/book'>
//           <Button className='hidden bg-orange-800 text-white hover:bg-orange-950 md:block'>
//             Book now
//           </Button>
//         </Link>
//       </div>

//     </section>
//   )
// }

// export default Carouzel
export default Header36
