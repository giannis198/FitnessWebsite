'use client'

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

const Classes = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-4 gap-y-16 px-[5%] py-16 pt-16 md:gap-10 md:py-24 md:pt-24 lg:grid-cols-2 lg:py-28 lg:pt-0'>
      <div>
        <Card className='h-full bg-background ring-1 ring-foreground'>
          <CardHeader>
            <CardTitle className='flex items-center justify-center pb-4'>
              Personal Training
            </CardTitle>
            <CardDescription className='flex w-full items-center justify-center text-wrap'>
              Ανακάλυψε τα οφέλη του Personal training με την Essential fitness
              και δώσε ώθηση στους στόχους σου!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent className='space-y-4'>
                  <h3 className='font-semibold'>Τι προσφέρουμε:</h3>

                  <ol>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm'>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Εξατομικευμένα Προγράμματα: Δημιουργούμε προπονήσεις που
                      ταιριάζουν απόλυτα στις ανάγκες σου.
                    </li>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm'>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Επαγγελματική Υποστήριξη: Οι εκπαιδευτές μας είναι εδώ για
                      να σε καθοδηγήσουν κάθε βήμα της διαδρομής.
                    </li>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm '>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Κίνητρο και Ενθάρρυνση: Σε βοηθάμε να παραμείνεις
                      επικεντρωμένος και ενθουσιασμένος.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className='h-full bg-background ring-1 ring-foreground'>
          <CardHeader>
            <CardTitle className='flex items-center justify-center pb-4'>
              Pilates
            </CardTitle>
            <CardDescription className='flex w-full items-center justify-center text-pretty'>
              Ανακαλύψτε την Ισορροπία και την Ευλυγισία με Pilates!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent className='space-y-4'>
                  <h3 className='font-semibold'>Γιατί να επιλέξετε Pilates;</h3>

                  <ol>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm'>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Βελτίωση Ευλυγισίας και Δύναμης: Ενισχύστε τους μύες σας
                      και αυξήστε την ευλυγισία σας με προσαρμοσμένες ασκήσεις
                      που επικεντρώνονται στη σταθερότητα του κορμού.
                    </li>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm'>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Ενίσχυση Στάσης: Το Pilates βοηθά στη βελτίωση της στάσης
                      του σώματος και της ευθυγράμμισης, μειώνοντας την ένταση
                      και τους πόνους.
                    </li>
                    <li className='grid grid-cols-[25px_1fr] items-start text-sm '>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      Χαλάρωση και Σωματική Επανορθωτική Άσκηση: Ιδανικό για
                      ανακούφιση από το άγχος και την ένταση, προσφέροντας μία
                      ολοκληρωμένη εμπειρία ευεξίας.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Classes
