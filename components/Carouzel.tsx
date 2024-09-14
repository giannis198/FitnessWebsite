'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
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

const images = [entrance, lobby, img1, img2, img3, img4, img5, img6]

const Carouzel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <div className='w-full items-center justify-between md:flex md:pr-12'>
      <div className='space-y-5'>
        <p className='hidden w-2/4 md:block md:text-3xl'>
          Our mission is to provide a place where everyone’s workout is based on
          their ESSENTIAL needs
        </p>
        <Button className='hidden bg-orange-800 text-white hover:bg-orange-950 md:block'>
          Contact Us
        </Button>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className='flex w-full max-w-md'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Image src={image} alt='' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Carouzel
