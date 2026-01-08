import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Droplets,
} from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Works', path: '/our-works' },
  { name: 'Contact', path: '/contact' },
];

const services = [
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
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] opacity-10"
        >
          <Droplets className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-[15%] opacity-10"
        >
          <Droplets className="w-12 h-12" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
              className="text-accent"
              animate={{
                d: [
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z",
                  "M0,80 C360,20 720,100 1080,40 C1260,60 1380,90 1440,80 L1440,120 L0,120 Z",
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="IMAK Technologies" className="w-14 h-14" />
              <div>
                <h3 className="font-bold text-xl">IMAK Technologies</h3>
                <p className="text-sm opacity-70">
                  Water & Waste Water Management
                </p>
              </div>
            </div>

            <p className="text-sm opacity-80 mb-6">
              Sustainable water and wastewater management solutions.
            </p>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/imak.technologies" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://youtube.com/@imaktechnologies" target="_blank" rel="noreferrer">
                <Youtube />
              </a>
              <a href="https://www.facebook.com/share/1FN6xEjEqA/" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://x.com/imak_shareef" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-sm opacity-70 hover:opacity-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Our Services</h4>
            {services.map((service) => (
              <Link
                key={service}
                to="/services"
                className="block text-xs opacity-70 hover:opacity-100"
              >
                {service}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact Us</h4>

            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} /> <span>+91 9000893889</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} /> <span>imak.tech365@gmail.com</span>
            </div>

            <div className="flex gap-2 mt-2">
              <MapPin size={16} />
              <address className="not-italic text-sm">
                14-26, Shakthi Sai Nagar,<br />
                BEL, Industrial Development Area,<br />
                Mallapur, Secunderabad,<br />
                Telangana – 500076
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-10 pt-6 border-t border-white/10">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} IMAK Technologies
          </p>
          <p className="text-xs opacity-60">
            Made with 💙 by{' '}
            <a
              href="https://www.staffarc.in/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              StaffArc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
