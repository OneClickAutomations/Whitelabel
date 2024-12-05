import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is white-labeling and how does it work with ElevenSaaS?',
    answer: 'White-labeling allows you to rebrand our AI tools as your own. You can customize the interface, add your logo, and sell these solutions under your brand name. We provide the technology, you provide the brand identity.'
  },
  {
    question: 'Can I customize the AI tools to match my brand?',
    answer: 'Yes! ElevenSaaS offers extensive customization options. You can modify colors, logos, fonts, and even the user interface to align perfectly with your brand guidelines.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, comprehensive documentation, and regular training sessions. Our dedicated support team ensures your success with the platform.'
  },
  {
    question: 'How often are the AI tools updated?',
    answer: 'We continuously update our AI tools with the latest technologies and features. Updates are automatically rolled out to all users, ensuring you always have access to cutting-edge AI capabilities.'
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
              <AccordionTrigger className="text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}