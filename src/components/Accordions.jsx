import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>how are you ?</AccordionTrigger>
          <AccordionContent>
              i am fine
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>who are you?</AccordionTrigger>
          <AccordionContent>
              I am Akash
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
    )
  }
  