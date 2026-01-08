import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Send,
  MessageSquare,
  Globe,
  Instagram,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-water.jpg';

const BLUE = '#2EC4D6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    service: '',
    description: '',
  });

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const message =
      `*IMAK Technologies Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.number}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Description:* ${formData.description}`;

    window.open(`https://wa.me/919000893889?text=${message}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const servicesList = [
    'Sewage Treatment Plant (STP)',
    'Water Treatment Plant (WTP)',
    'Swimming Pool',
    'Package STPs',
    'Service & Maintenance (O&M)',
    'Pollution Control Equipment',
    'Chemical Supplies',
    'Common Salt',
    'TCCA (Trichloroisocyanuric Acid)',
    'Sewage Tank Cleaning',
    'Annual Maintenance Contract (AMC) & Repairs',
    'Other',
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-accent-foreground text-sm font-medium">
                Contact Us
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>

            <p className="text-xl text-primary-foreground/90">
              Have questions about water or wastewater solutions?  
              Our experts are ready to guide you with the right treatment approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">

            {/* LEFT — CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Contact Information
              </span>

              <div className="mt-8 space-y-6">

                {/* PHONE */}
                <a href="tel:+919000893889">
                  <div className="flex items-center gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Call Us
                      </p>
                      <p className="text-foreground font-bold text-lg">
                        +91 9000893889
                      </p>
                    </div>
                  </div>
                </a>

                {/* EMAIL */}
                <a href="mailto:imak.tech365@gmail.com">
                  <div className="flex items-center gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Email Us
                      </p>
                      <p className="text-foreground font-bold text-lg">
                        imak.tech365@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* TWITTER */}
                <a
                  href="https://x.com/imak_shareef"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Twitter / X
                      </p>
                      <p className="text-foreground font-bold text-lg">
                        @imak_shareef
                      </p>
                    </div>
                  </div>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/imak.technologies?igsh=dDkxY2psc24wZHVp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Instagram
                      </p>
                      <p className="text-foreground font-bold text-lg">
                        imak.technologies
                      </p>
                    </div>
                  </div>
                </a>

                {/* LOCATION */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=14-26+Shakthi+Sai+Nagar+Mallapur+Secunderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <address className="not-italic text-foreground font-semibold leading-relaxed">
                      14-26, Shakthi Sai Nagar,<br />
                      BEL IDA, Mallapur,<br />
                      Secunderabad – 500076
                    </address>
                  </div>
                </a>

              </div>
            </motion.div>

            {/* RIGHT — FORM (UNCHANGED) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-card rounded-3xl shadow-elevated overflow-hidden">
                <div className="px-8 py-5 flex items-center gap-3 text-primary-foreground font-bold text-lg bg-water-gradient">
                  <MessageSquare size={22} />
                  Send a WhatsApp Inquiry
                </div>

                <form onSubmit={handleSendWhatsApp} className="p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input id="name" placeholder="Your Name" onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-cyan-200 outline-none" />
                    <input id="number" placeholder="Phone Number" onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-cyan-200 outline-none" />
                  </div>

                  <select id="service" onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-cyan-200 outline-none">
                    <option value="">Select Service</option>
                    {servicesList.map((s, i) => <option key={i}>{s}</option>)}
                  </select>

                  <textarea id="description" rows={4} placeholder="Message" onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-cyan-200 outline-none resize-none" />

                  <Button className="w-full py-6 rounded-2xl text-lg font-bold text-white shadow-lg hover:opacity-95 flex items-center justify-center gap-2" style={{ backgroundColor: BLUE }}>
                    <Send size={20} />
                    Send Message Now
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
