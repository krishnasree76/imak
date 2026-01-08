import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '919000893889';
  const message = encodeURIComponent(
    "Hi IMAK Technologies, I'm interested in your water & wastewater management services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-16
        bg-[#25D366]
        rounded-full
        flex items-center justify-center
        shadow-xl
        hover:shadow-2xl
      "
    >
      <FaWhatsapp className="text-white text-4xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
