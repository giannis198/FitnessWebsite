import Link from 'next/link'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div>
      <Link href='https://essentialfitnessskg.setmore.com/book'>
        <Button className='w-full bg-orange-800 text-white hover:bg-orange-950'>
          Book Now
        </Button>
      </Link>
    </div>
  )
}

export default CTA
