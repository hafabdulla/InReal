import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'First-time Investor',
      image: 'Professional woman smiling confidently in modern office',
      rating: 5,
      text: "InReal made it incredibly easy to start investing in real estate. I started with just $500 and I'm already seeing returns. The platform is transparent and the team is always helpful!",
    },
    {
      name: 'Michael Chen',
      role: 'Portfolio Diversifier',
      image: 'Asian businessman in suit looking professional',
      rating: 5,
      text: "As someone who already invests in stocks, InReal was the perfect way to diversify into real estate without the huge capital requirements. The SPV structure gives me peace of mind.",
    },
    {
      name: 'Emma Rodriguez',
      role: 'Global Investor',
      image: 'Young professional woman with laptop smiling',
      rating: 5,
      text: "I love that I can invest in Bangkok properties from anywhere in the world. The scheduled distributions are reliable and the returns exceed my expectations. Highly recommend!",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">
            Investor Stories
          </p>
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight normal-case">
            What Our Investors Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-deep-graphite rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative border border-modern-grey">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-black/20" />
                
                <div className="flex items-center mb-6">
                  <img
                    class="w-16 h-16 rounded-full object-cover mr-4"
                    alt={testimonial.name} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  
                  <div>
                    <p className="font-bold text-off-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-grey">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-accent text-primary-accent" />
                  ))}
                </div>

                <p className="text-off-white leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}