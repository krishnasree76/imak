import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Droplets, 
  Leaf, 
  Shield, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

// Asset Imports
import heroImage from '@/assets/hero-water.jpg';
import aboutImage from '@/assets/project-4.jpg';
import serviceStp from '@/assets/service-stp.jpg';
import serviceWtp from '@/assets/service-wtp.jpg';
import servicePool from '@/assets/ow7.jpeg';
import serviceMaintenance from '@/assets/service-maintenance.jpg';
import swimmingPoolImg from '@/assets/swimmingpool.png';
import sewageImg from '@/assets/sewage.png';
import waterPlantImg from '@/assets/waterplant.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const heroSlides = [
  {
    image: heroImage,
    title: (
      <>
        <span className="text-white">Welcome to </span>
        <span className="font-bold text-accent">
          IMAK TECHNOLOGIES
        </span>
      </>
    ),
    description: (
      <span className="text-white text-lg md:text-xl">
        Sustainable Water & Waste Water Management Systems
      </span>
    ),
    showOverlay: true,
    badge: null,
  },
  {
    image: swimmingPoolImg,
    title: "SWIMMING POOL",
    description:
      "Expertly designed swimming pool systems focused on water clarity, hygiene, and sustainable circulation.",
    showOverlay: false,
    badge: "Premium Aquatic Systems",
  },
  {
    image: sewageImg,
    title: "Sewage Treatment Plant (STP)",
    description:
      "State-of-the-art sewage treatment plants designed to treat domestic and industrial wastewater efficiently.",
    showOverlay: false,
    badge: "Waste Management",
  },
  {
    image: waterPlantImg,
    title: "Water Treatment Plant (WTP)",
    description:
      "Comprehensive water treatment solutions for potable and industrial applications.",
    showOverlay: false,
    badge: "Pure Water Solutions",
  },
];



const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const intervalRef = useRef(null);

const startAutoSlide = () => {
  stopAutoSlide();
  intervalRef.current = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  }, 2000); // ⏱ 2 seconds
};

const stopAutoSlide = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
  }
};

useEffect(() => {
  startAutoSlide();
  return () => stopAutoSlide();
}, []);


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const prevHero = () => {
  stopAutoSlide();
  setHeroIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  startAutoSlide();
};

const nextHero = () => {
  stopAutoSlide();
  setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  startAutoSlide();
};


  const currentSlide = heroSlides[heroIndex];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === heroIndex ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              {/* Conditional Overlays within the same animated div */}
              {slide.showOverlay ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/50" />
              ) : (
                <div className="absolute inset-0 bg-black/40" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevHero}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextHero}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Droplets className="w-5 h-5 text-accent" />
              <span className="text-accent-foreground text-sm font-medium">
                {currentSlide.badge}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              {currentSlide.title}
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              {currentSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('features')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </section>

      {/* --- Rest of your original sections (Features, About, Services, CTA) start here --- */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Droplets,
                title: 'Water Conservation',
                description: 'Advanced treatment systems that recycle and conserve precious water resources.'
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly Solutions',
                description: 'Sustainable practices that protect the environment and reduce pollution.'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Industry-leading standards ensuring clean, safe water for all applications.'
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-water-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About IMAK Technologies
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Committed to a{' '}
                <span className="text-gradient-water">Sustainable Future</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At IMAK Technologies, we believe that every drop of water matters. 
                Our mission is to provide innovative, eco-friendly water and wastewater 
                management solutions that protect our planet for future generations.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Conserving water resources through advanced treatment',
                  'Reducing water pollution with cutting-edge technology',
                  'Supporting sustainable development goals',
                  'Protecting ecosystems and public health'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-6 h-6 rounded-full bg-nature flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-nature-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage}
                  alt="Clean water environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Our <span className="text-gradient-water">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive water and wastewater management solutions tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Sewage Treatment Plant', image: serviceStp },
              { title: 'Water Treatment Plant', image: serviceWtp },
              { title: 'Swimming Pool Systems', image: servicePool },
              { title: 'Service & Maintenance', image: serviceMaintenance },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 card-hover"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="default" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-water-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Join us in our mission to preserve water resources and protect our environment. 
              Contact us today to discuss your water management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="tel:9000893889">Call: 9000893889</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;