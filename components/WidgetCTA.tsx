import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const WidgetCTA = () => {
  return (
    <div>
      <Link href='https://essentialfitnessskg.setmore.com/book'>
        <Button className='fixed right-5 top-3/4 h-20 w-20 rounded-full bg-orange-800  text-white hover:bg-orange-950'>
          Book <br />
          Now
        </Button>
      </Link>
    </div>
  )
}

export default WidgetCTA
