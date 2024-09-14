import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import {
  AccessibilityIcon,
  ALargeSmall,
  Contrast,
  Link2Off,
  AlignHorizontalSpaceBetween,
  SeparatorHorizontal,
  Text
} from 'lucide-react'

import React from 'react'
import WidgetButton from './WidgetButton'

function Widget() {
  return (
    <>
      <Sheet>
        <SheetTrigger className='absolute left-1'>
          <AccessibilityIcon size={64} />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle className='mt-10'>Μενού Προσβασιμότητας</SheetTitle>
            <SheetDescription className='mt-4 grid grid-cols-2 gap-4'>
              <WidgetButton icon={ALargeSmall} text='Μεγάλο κείμενο' />
              <WidgetButton icon={Contrast} text='Αντίθεση' />
              <WidgetButton icon={Link2Off} text='Σύνδεσμοι' />
              <WidgetButton
                icon={AlignHorizontalSpaceBetween}
                text='Αύξηση Απόστασης Κειμένου'
              />
              <WidgetButton icon={SeparatorHorizontal} text='Υψος Γραμμής' />
              <WidgetButton icon={Text} text='Στοίχιση κειμένου' />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Widget
