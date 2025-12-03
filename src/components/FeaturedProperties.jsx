import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
export function FeaturedProperties() {
  const properties = [{
    title: 'Bangkok Premium Condo',
    location: 'Sukhumvit, Bangkok',
    image: 'Modern luxury condominium in Bangkok Sukhumvit area with city views',
    price: '$500',
    returns: '14%',
    investors: '247',
    funded: '78%'
  }, {
    title: 'Riverside Luxury Apartment',
    location: 'Chao Phraya, Bangkok',
    image: 'Luxury riverside apartment building along Chao Phraya river Bangkok',
    price: '$750',
    returns: '16%',
    investors: '189',
    funded: '92%'
  }, {
    title: 'Downtown Business Suite',
    location: 'Silom, Bangkok',
    image: 'Modern business district high-rise building in Bangkok Silom',
    price: '$600',
    returns: '15%',
    investors: '312',
    funded: '65%'
  }];
  const handleViewProperty = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">FEATURED OPPORTUNITIES</p>
          <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight normal-case">Currently Fundraising </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => <motion.div key={property.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="group">
              <div className="bg-deep-graphite text-off-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-modern-grey">
                <div className="relative overflow-hidden h-64">
                  <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={property.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  
                  <div className="absolute top-4 right-4 bg-black/95 backdrop-blur-sm rounded-full px-4 py-2 font-semibold text-primary-accent">
                    {property.funded} Funded
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold mb-2 text-primary-accent normal-case text-2xl">{property.title}</h3>
                  
                  <div className="flex items-center text-slate-grey mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-primary-accent" />
                    <span>{property.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-modern-grey/20">
                    <div className="text-center">
                      <p className="text-sm text-slate-grey mb-1">Min. Investment</p>
                      <p className="text-lg font-bold text-off-white">{property.price}</p>
                    </div>
                    <div className="text-center border-x border-modern-grey/20">
                      <p className="text-sm text-slate-grey mb-1">Returns</p>
                      <p className="text-lg font-bold text-primary-accent flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {property.returns}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-grey mb-1">Investors</p>
                      <p className="text-lg font-bold text-off-white flex items-center justify-center">
                        <Users className="w-4 h-4 mr-1" />
                        {property.investors}
                      </p>
                    </div>
                  </div>

                  <Button onClick={handleViewProperty} className="w-full bg-primary-accent hover:bg-steel-blue text-charcoal-black font-bold group">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}