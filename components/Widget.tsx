'use client'

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
import { useContext } from 'react'

import { useTheme } from 'next-themes'
import WidgetButton from './WidgetButton'
import { TextSizeContext } from './textSize-provider'

function Widget() {
  const context = useContext(TextSizeContext)
  const { theme, setTheme } = useTheme()

  if (!context) {
    throw new Error('TextSizeButtons must be used within a TextSizeProvider')
  }

  const {
    increaseTextSize,
    increaseLetterSpacing,
    increaseLineSpacing,
    changeTextAlignment
  } = context

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <Sheet>
        <SheetTrigger className='absolute left-1'>
          <AccessibilityIcon size={42} />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle className='mt-10'>Μενού Προσβασιμότητας</SheetTitle>
            <SheetDescription className='mt-4 grid grid-cols-2 gap-4'>
              <button onClick={increaseTextSize}>
                <WidgetButton icon={ALargeSmall} text='Μεγάλο κείμενο' />
              </button>

              <button onClick={toggleTheme}>
                <WidgetButton icon={Contrast} text='Αντίθεση' />
              </button>

              <button onClick={increaseLetterSpacing}>
                <WidgetButton
                  icon={AlignHorizontalSpaceBetween}
                  text='Αύξηση Απόστασης Κειμένου'
                />
              </button>

              <button onClick={increaseLineSpacing}>
                <WidgetButton icon={SeparatorHorizontal} text='Υψος Γραμμής' />{' '}
              </button>
              <button onClick={changeTextAlignment}>
                <WidgetButton icon={Text} text='Στοίχιση κειμένου' />
              </button>

              <WidgetButton icon={Link2Off} text='Σύνδεσμοι' />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Widget
