import { motion } from 'framer-motion';
import { Droplets, Leaf, Shield, Users, Globe, Heart, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import aboutImage from '@/assets/project-3.jpg';
import heroImage from '@/assets/hero-water.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const values = [
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'We are dedicated to protecting our planet by implementing sustainable practices in every project we undertake.'
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Our solutions meet the highest industry standards, ensuring consistent performance and long-term durability.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We build lasting relationships by understanding and exceeding our clients\' expectations.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously adopt cutting-edge technologies to provide the most effective water treatment solutions.'
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Water treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-accent-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-accent-foreground text-sm font-medium">
                About Our Company
              </span>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-accent">IMAK Technologies</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Pioneering sustainable water management solutions for a cleaner, healthier planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Guardians of{' '}
                <span className="text-gradient-water">Water Resources</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  IMAK Technologies stands at the forefront of environmental protection and 
                  sustainable water management in India. Founded with a vision to address the 
                  growing challenges of water scarcity and pollution, we have grown into a 
                  trusted name in water and wastewater treatment solutions.
                </p>
                <p>
                  Our journey began with a simple yet powerful belief: that access to clean 
                  water is a fundamental right, and protecting our water resources is a 
                  responsibility we all share. This conviction drives every project we 
                  undertake and every solution we design.
                </p>
                <p>
                  Today, we serve industries, commercial establishments, and communities 
                  across Telangana and beyond, delivering customized water treatment systems 
                  that meet the highest environmental standards while ensuring operational 
                  efficiency and cost-effectiveness.
                </p>
              </div>
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
                  alt="Clean environment"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-elevated max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-nature flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-nature-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">Our Commitment</p>
                    <p className="text-muted-foreground text-sm">To Earth, Nature & Future Generations</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-water-gradient flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide innovative, sustainable water and wastewater management solutions 
                that protect our environment, conserve precious water resources, and contribute 
                to the well-being of communities. We strive to be the trusted partner for 
                industries and organizations seeking to minimize their environmental footprint 
                while maximizing operational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-nature-gradient flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-nature-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of eco-friendly water management solutions in India, 
                setting new standards for environmental responsibility in the industry. We 
                envision a future where clean water is accessible to all, where industrial 
                growth and environmental protection go hand in hand, and where our technologies 
                help build a sustainable world for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Environmental <span className="text-gradient-nature">Responsibility</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              At IMAK Technologies, environmental protection isn't just a service—it's our core purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: 'Water Conservation',
                description: 'Recycling and reusing treated water to reduce freshwater consumption by up to 80%.'
              },
              {
                icon: Leaf,
                title: 'Pollution Reduction',
                description: 'Removing harmful pollutants and contaminants before they reach our water bodies.'
              },
              {
                icon: Globe,
                title: 'Sustainable Development',
                description: 'Supporting SDG 6: Clean Water and Sanitation through innovative solutions.'
              },
              {
                icon: Shield,
                title: 'Ecosystem Protection',
                description: 'Safeguarding aquatic ecosystems and protecting public health through quality treatment.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-water-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-accent-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-accent-foreground/20"
              >
                <value.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
