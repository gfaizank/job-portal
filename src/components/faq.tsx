import { faq, FaqType } from "~/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto mb-6 w-full max-w-7xl px-4"
    >
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        FAQ's
      </h2>{" "}
      {faq.map(({ id, question, answer }: FaqType) => {
        return (
          <AccordionItem key={id} value={`item-${id}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Faq;
