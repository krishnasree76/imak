import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Works', path: '/our-works' },
  { name: 'Contact', path: '/contact' },
];

const BLUE = '#0B3C5D';
const LIGHT_BLUE = '#3FA9F5';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between py-3">

          {/* Logo + Brand */}
          <Link to="/" className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={logo}
                alt="IMAK Technologies Logo"
                className="w-20 h-20 object-contain"
              />
            </motion.div>

            <span
              className="mt-1 text-lg font-semibold tracking-wide"
              style={{
                color: BLUE,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              IMAK TECHNOLOGIES
            </span>

            <span
              className="text-xs tracking-widest mt-0.5"
              style={{
                color: LIGHT_BLUE,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              WATER | EARTH | NATURE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: isActive ? '#fff' : BLUE,
                    backgroundColor: isActive ? BLUE : 'transparent',
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            style={{ color: BLUE }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>

        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4"
            >
              <div className="bg-white shadow-lg rounded-xl p-4 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 rounded-lg"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: BLUE,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
