import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiShield, FiCpu } from 'react-icons/fi';

const features = [
  {
    icon: <FiCode />,
    title: "Simple API Integration",
    description: "Get started in minutes with our RESTful API and comprehensive documentation."
  },
  {
    icon: <FiDatabase />,
    title: "Structured Data Export",
    description: "Export data in JSON, CSV, or XML formats with automatic parsing and cleaning."
  },
  {
    icon: <FiShield />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and proxy rotation to keep your data safe and reliable."
  },
  {
    icon: <FiCpu />,
    title: "Intelligent Parsing",
    description: "AI-powered data extraction that adapts to website changes automatically."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-radial from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Powerful Features</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="text-3xl text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
