import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "Use the contact form or call the office."
    },
    {
      question: "What should I expect in my first session?",
      answer: "An initial assessment and discussion of your goals."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Typically 50 minutes."
    },
    {
      question: "What is your approach to therapy?",
      answer: "A blend of cognitive-behavioral therapy and mindfulness techniques."
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8 text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-0 rounded-none shadow-none"
            >
              <AccordionTrigger className="text-left text-xl font-serif font-medium text-gray-800 hover:text-gray-600 py-6 px-8 border-b border-gray-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed px-8 pb-8 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;