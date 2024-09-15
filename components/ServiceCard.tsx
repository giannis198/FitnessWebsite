import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

type Props = {
  description: string
  title: string
}

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div>
      <Card className='bg-background'>
        <CardHeader>
          <CardTitle className='flex items-center justify-center pb-4'>
            {title}
          </CardTitle>
          <CardDescription className='flex w-full items-center justify-center text-pretty'>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent>Ψοντεντ</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServiceCard
