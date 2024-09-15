import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { isOpenNow } from '@/lib/utils'
import { Clock } from 'lucide-react'
import Day from './Day'

const WorkingTime = () => {
  const openNow = isOpenNow()
  return (
    <div className='text-sm'>
      <Accordion type='single' collapsible>
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
    </div>
  )
}

export default WorkingTime
