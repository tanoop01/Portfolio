import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { contactData } from '../data/contactData';
import { staggerContainer, slideUp } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <SectionWrapper id="contact" background="default">
      <SectionTitle
        title={contactData.title}
        subtitle={contactData.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all outline-none resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              className="w-full"
              disabled={isSubmitted}
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </Button>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 text-center font-medium"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.p>
            )}
          </form>
        </Card>

        {/* Social Links */}
        <div className="space-y-6">
          <Card className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactData.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={slideUp}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {social.handle}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </Card>

          {/* Additional Info Card */}
          <Card className="p-6 sm:p-8" glass>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
