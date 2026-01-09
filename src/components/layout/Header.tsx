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

const BRAND_BLUE = '#0B3C5D';
const CYAN = '#3FA9F5';

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

          {/* LOGO LOCKUP — EXACT LIKE IMAGE */}
          {/* LOGO LOCKUP — EXACT LIKE IMAGE */}
{/* LOGO LOCKUP — EXACT LIKE IMAGE */}
{/* LOGO LOCKUP — EXACT LIKE IMAGE */}
{/* LOGO LOCKUP — EXACT LIKE IMAGE */}
{/* LOGO LOCKUP — EXACT ALIGNMENT */}
{/* LOGO LOCKUP — EXACT ALIGNMENT */}
{/* LOGO LOCKUP — EXACT LIKE IMAGE */}
<Link to="/" className="flex items-center gap-2">
  {/* Logo (closer to text) */}
  <motion.img
    src={logo}
    alt="IMAK Technologies Logo"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="w-14 h-14 object-contain"
  />

  {/* Text Lockup */}
  <div
    className="relative"
    style={{
      fontFamily: 'Montserrat, sans-serif',
      lineHeight: '1.1',
    }}
  >
    <span
      className="text-[26px] font-bold tracking-tight"
      style={{ color: '#0B3C5D' }}
    >
      IMAK{' '}
      <span className="relative inline-block">
        TECHNOLOGIES

        {/* Tagline starts EXACTLY under the T of TECHNOLOGIES */}
        <span
          className="absolute left-[0.6ch] top-full mt-[2px] text-[11px] whitespace-nowrap"

          style={{
            color: '#333',
            letterSpacing: '0.08em',
            fontWeight: 500,
          }}
        >
          WATER | EARTH | NATURE
        </span>
      </span>
    </span>
  </div>
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
                    fontFamily: 'Montserrat, sans-serif',
                    color: isActive ? '#fff' : BRAND_BLUE,
                    backgroundColor: isActive ? BRAND_BLUE : 'transparent',
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
            style={{ color: BRAND_BLUE }}
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
                      fontFamily: 'Montserrat, sans-serif',
                      color: BRAND_BLUE,
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
