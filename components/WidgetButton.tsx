import { Toggle } from '@/components/ui/toggle'
import { LucideIcon } from 'lucide-react'

type Props = {
  text: string
  icon: LucideIcon
}

function WidgetButton({ icon: Icon, text }: Props) {
  return (
    <div>
      <Toggle className='flex h-full w-full flex-col items-center justify-center'>
        <Icon size={64} className='flex items-center justify-center' />
        <p className='text-sm'>{text}</p>
      </Toggle>
    </div>
  )
}

export default WidgetButton
