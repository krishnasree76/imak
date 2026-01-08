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
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="IMAK Technologies" className="w-14 h-14" />
              <div>
                <h3 className="font-bold text-xl">IMAK Technologies</h3>
                <p className="text-sm opacity-80">
                  Water & Waste Water Management
                </p>
              </div>
            </div>

            <p className="text-base opacity-90 mb-6 leading-relaxed">
              Sustainable water and wastewater management solutions.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/imak.technologies" target="_blank" rel="noreferrer">
                <Instagram className="w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href="https://youtube.com/@imaktechnologies" target="_blank" rel="noreferrer">
                <Youtube className="w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href="https://www.facebook.com/share/1FN6xEjEqA/" target="_blank" rel="noreferrer">
                <Facebook className="w-6 h-6 hover:scale-110 transition" />
              </a>
              <a href="https://x.com/imak_shareef" target="_blank" rel="noreferrer">
                <Twitter className="w-6 h-6 hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-accent text-lg">Quick Links</h4>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-base opacity-80 hover:opacity-100 hover:translate-x-1 transition mb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-5 text-accent text-lg">Our Services</h4>
            {services.map((service) => (
  <Link
    key={service}
    to="/services"
    className="block text-base opacity-80 hover:opacity-100 hover:translate-x-1 transition mb-2"
  >
    {service}
  </Link>
))}

          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-accent text-lg">Contact Us</h4>

            <a
              href="tel:+919000893889"
              className="flex items-center gap-3 mb-3 text-base hover:opacity-100 opacity-80 transition"
            >
              <Phone size={18} />
              +91 9000893889
            </a>

            <a
              href="mailto:imak.tech365@gmail.com"
              className="flex items-center gap-3 mb-3 text-base hover:opacity-100 opacity-80 transition"
            >
              <Mail size={18} />
              imak.tech365@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=14-26+Shakthi+Sai+Nagar+Mallapur+Secunderabad"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-base hover:opacity-100 opacity-80 transition"
            >
              <MapPin size={18} />
              <address className="not-italic leading-relaxed">
                14-26, Shakthi Sai Nagar,<br />
                BEL, Industrial Development Area,<br />
                Mallapur, Secunderabad,<br />
                Telangana – 500076
              </address>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-12 pt-6 border-t border-white/10">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} IMAK Technologies
          </p>
          <p className="text-xs opacity-70 mt-1">
            Made with 💙 by{' '}
            <a
              href="https://www.staffarc.in/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-100"
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
