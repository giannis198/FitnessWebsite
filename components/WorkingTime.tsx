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
            {openNow ? 'Open Now' : 'Closed Now'}
          </AccordionTrigger>
          <AccordionContent>
            <Day day='Monday' hour='8:00 - 22:30' />
            <Day day='Tuesday' hour='8:00 - 22:30' />
            <Day day='Wednesday' hour='8:00 - 22:30' />
            <Day day='Thursday' hour='8:00 - 22:30' />
            <Day day='Friday' hour='8:00 - 22:30' />
            <Day day='Saturday' hour='Closed' />
            <Day day='Sunday' hour='Closed' />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default WorkingTime
