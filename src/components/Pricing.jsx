import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "10,000 requests/month",
      "Basic API access",
      "JSON/CSV export",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    popular: true,
    features: [
      "50,000 requests/month",
      "Advanced API features",
      "Priority support",
      "Custom export formats"
    ]
  },
  {
    name: "Enterprise",
    price: "249",
    features: [
      "Unlimited requests",
      "Dedicated support",
      "Custom solutions",
      "SLA guarantee"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Simple Pricing</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-xl ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FiCheck className="text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn btn-block ${
                plan.popular ? 'btn-primary' : 'btn-outline'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
