import { motion } from 'framer-motion';
import { Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';

// Hero & service images
import heroImage from '@/assets/hero-water.jpg';
import serviceStp from '@/assets/service-stp.jpg';
import serviceWtp from '@/assets/service-wtp.jpg';
import servicePool from '@/assets/ow7.jpeg';
import servicePackage from '@/assets/ow1.jpeg';
import serviceMaintenance from '@/assets/service-maintenance.jpg';
import servicePollution from '@/assets/service-pollution.jpg';
import serviceChemicals from '@/assets/service-chemicals.jpg';
import serviceSalt from '@/assets/SALT.jpeg';
import serviceTcca from '@/assets/TCCA.jpeg';
import serviceTank from '@/assets/service-tank.jpg';
import serviceAmc from '@/assets/project-5.jpg';

// Pollution slider images
import ps1 from '@/assets/pc1.jpeg';
import ps2 from '@/assets/pc2.jpeg';
import ps3 from '@/assets/pc3.jpeg';
import ps4 from '@/assets/pc4.jpeg';
import ps5 from '@/assets/pc5.jpeg';
import ps6 from '@/assets/pc6.jpeg';
import ps7 from '@/assets/pc7.jpeg';

const services = [
  {
    id: 1,
    title: 'Sewage Treatment Plant (STP)',
    description:
      'Advanced sewage treatment systems engineered for efficient domestic and industrial wastewater processing.',
    image: serviceStp,
    features: ['Biological Treatment', 'Chemical Dosing', 'Sludge Management', 'Water Recycling'],
  },
  {
    id: 2,
    title: 'Water Treatment Plant (WTP)',
    description:
      'End-to-end water treatment solutions delivering safe, clean, and potable water for diverse applications.',
    image: serviceWtp,
    features: ['Filtration Systems', 'Disinfection', 'Softening', 'RO Systems'],
  },
  {
    id: 3,
    title: 'Swimming Pool',
    description:
      'Professional swimming pool treatment and maintenance solutions ensuring hygiene and crystal-clear water.',
    image: servicePool,
    features: ['Filtration Equipment', 'Chemical Balance', 'UV Treatment', 'Automation'],
  },
  {
    id: 4,
    title: 'Package STPs',
    description:
      'Compact, pre-fabricated sewage treatment plants ideal for residential and commercial projects.',
    image: servicePackage,
    features: ['Compact Design', 'Easy Installation', 'Low Maintenance', 'Cost Effective'],
  },
  {
    id: 5,
    title: 'Service & Maintenance (O&M)',
    description:
      'Reliable operation and maintenance services ensuring optimal plant performance and compliance.',
    image: serviceMaintenance,
    features: ['24/7 Support', 'Preventive Maintenance', 'Emergency Repairs', 'Monitoring'],
  },
  {
    id: 6,
    title: 'Pollution Control Equipment',
    description:
      'Industrial pollution control solutions designed to meet stringent environmental regulations.',
    image: servicePollution,
    gallery: [ps1, ps2, ps3, ps4, ps5, ps6, ps7],
    features: ['Air Scrubbers', 'ETP Systems', 'Emission Control', 'Compliance Support'],
  },
  {
    id: 7,
    title: 'Chemical Supplies',
    description:
      'High-quality chemicals for effective water purification and treatment processes.',
    image: serviceChemicals,
    features: ['Coagulants', 'Flocculants', 'Disinfectants', 'pH Chemicals'],
  },
  {
    id: 8,
    title: 'Common Salt',
    description:
      'Premium industrial-grade salt for water softening and chlorination applications.',
    image: serviceSalt,
    features: ['Water Softening', 'Industrial Grade', 'Bulk Supply', 'Quality Assured'],
  },
  {
    id: 9,
    title: 'TCCA (Trichloroisocyanuric Acid)',
    description:
      'Highly effective disinfectant tablets and granules for long-lasting water sanitation.',
    image: serviceTcca,
    features: ['Pool Disinfection', 'Tank Sanitization', 'Long-lasting Effect'],
  },
  {
    id: 10,
    title: 'Sewage Tanks Cleaning',
    description:
      'Professional sewage and septic tank cleaning services with safe disposal practices.',
    image: serviceTank,
    features: ['Complete Cleaning', 'Safe Disposal', 'Quick Service'],
  },
  {
    id: 11,
    title: 'Annual Maintenance Contract (AMC) & Repairs',
    description:
      'Comprehensive annual maintenance services ensuring long-term equipment reliability.',
    image: serviceAmc,
    features: ['Preventive Maintenance', 'Priority Repairs'],
  },
];

const Services = () => {
  const pollutionRef = useRef<HTMLDivElement>(null);
  const pollutionInterval = useRef<NodeJS.Timeout | null>(null);

  const startPollutionAuto = () => {
    stopPollutionAuto();
    pollutionInterval.current = setInterval(() => {
      if (pollutionRef.current) {
        pollutionRef.current.scrollLeft += 240;
      }
    }, 2000);
  };

  const stopPollutionAuto = () => {
    if (pollutionInterval.current) {
      clearInterval(pollutionInterval.current);
    }
  };

  useEffect(() => {
    startPollutionAuto();
    return () => stopPollutionAuto();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full mb-6">
              <Settings className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold tracking-wide text-white">
                Comprehensive Solutions
              </span>
            </div>

            {/* FONT CHANGED HERE */}
            <h1 className="font-heading text-5xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-accent">Services</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
              Complete water and wastewater management solutions tailored for sustainability, efficiency, and long-term
              reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 card-hover overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* IMAGE / SLIDER SECTION */}
                  <div className="md:w-2/5 relative p-3">
                    {service.id === 6 ? (
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            const slider = e.currentTarget.nextSibling as HTMLDivElement;
                            slider.scrollLeft -= 250;
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div
                          ref={pollutionRef}
                          className="flex overflow-x-auto gap-3 scroll-smooth no-scrollbar px-2"
                        >
                          {service.gallery?.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`pollution-${i}`}
                              className="min-w-[220px] h-[200px] object-cover rounded-xl shadow-sm"
                            />
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            const slider = e.currentTarget.previousSibling as HTMLDivElement;
                            slider.scrollLeft += 250;
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl shadow-sm" />
                    )}
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    {/* FONT CHANGED HERE TO MATCH INDEX */}
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;