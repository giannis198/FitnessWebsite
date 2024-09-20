'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { isOpenNow } from '@/lib/utils'
import { Clock } from 'lucide-react'
import Day from './Day'
import { useEffect, useState } from 'react'

const WorkingTime = () => {
  const [openNow, setOpenNow] = useState(isOpenNow())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpenNow(isOpenNow())
    }, 60000) // Check every minute

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [])

  return (
    <section className='mx-auto md:w-2/3'>
      <Accordion
        type='single'
        collapsible
        className='px-2 ring-1 ring-foreground'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <Clock />
            {openNow ? 'Ανοιχτά' : 'Κλειστά'}
          </AccordionTrigger>
          <AccordionContent>
            <Day day='Δευτέρα' hour='8:00 - 22:30' />
            <Day day='Τρίτη' hour='8:00 - 22:30' />
            <Day day='Τετάρτη' hour='8:00 - 22:30' />
            <Day day='Πέμπτη' hour='8:00 - 22:30' />
            <Day day='Παρασκευή' hour='8:00 - 22:30' />
            <Day day='Σάββατο' hour='Κλειστά' />
            <Day day='Κυριακή' hour='Κλειστά' />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default WorkingTime
