import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "DataScraper Pro transformed how we gather market intelligence. It's fast, reliable, and incredibly easy to use.",
    author: "Sarah Johnson",
    role: "CTO at MarketPulse",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    quote: "The API is so well-documented that we were up and running in less than a day. Impressive service!",
    author: "Michael Chen",
    role: "Lead Developer at TechFlow",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    quote: "Their enterprise solution handles our large-scale scraping needs with zero downtime. Exactly what we needed.",
    author: "Emma Williams",
    role: "Data Science Lead at DataCorp",
    image: "https://i.pravatar.cc/100?img=3"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-radial from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Trusted by Leaders</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
