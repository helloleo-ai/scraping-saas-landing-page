import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: "How does the pricing work?",
    answer: "Our pricing is based on monthly request volume. Each plan comes with a set number of API requests, and you can upgrade or downgrade at any time."
  },
  {
    question: "Do you support custom solutions?",
    answer: "Yes! Our Enterprise plan includes custom development and integration support to meet your specific needs."
  },
  {
    question: "What about website changes?",
    answer: "Our AI-powered scraping engine automatically adapts to most website changes. For major changes, our team provides quick updates to maintain continuity."
  },
  {
    question: "Is it legal to scrape websites?",
    answer: "Web scraping is legal when done responsibly. We follow best practices, respect robots.txt, and maintain appropriate request rates."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Common Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
