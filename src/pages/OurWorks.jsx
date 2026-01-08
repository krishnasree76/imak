import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

import heroImage from '@/assets/hero-water.jpg';

import ow1 from '@/assets/ow1.jpeg';
import ow2 from '@/assets/ow2.jpeg';
import ow3 from '@/assets/ow3.jpeg';
import ow4 from '@/assets/ow4.jpeg';
import ow5 from '@/assets/ow5.jpeg';
import ow6 from '@/assets/ow6.jpeg';
import ow7 from '@/assets/ow7.jpeg';

const works = [ow1, ow2, ow3, ow4, ow5, ow6, ow7];

const OurWorks = () => {
  return (
    <Layout>

      {/* HERO BANNER — SAME AS ABOUT US */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Our Projects"
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
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6">
              Our <span className="text-accent">Works</span>
            </h1>

            <p className="text-xl text-primary-foreground/90">
              A showcase of our successfully delivered water and wastewater
              management projects across residential, commercial, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WORKS GRID */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {works.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card
                           shadow-card hover:shadow-elevated
                           transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img}
                    alt={`Our Work ${index + 1}`}
                    className="w-full h-full object-cover
                               group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0
                                bg-gradient-to-t from-primary/70 via-primary/30 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300">
                  <p className="font-heading font-semibold text-primary-foreground text-sm">
                    Project {index + 1}
                  </p>
                  <p className="text-primary-foreground/80 text-xs">
                    Water & Wastewater Solution
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default OurWorks;
