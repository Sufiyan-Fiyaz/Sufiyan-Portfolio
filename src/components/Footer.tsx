import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-portfolio-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 sm:gap-3 order-1 sm:order-none"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'Ballet, cursive' }}>S</span>
            </div>
            <span className="text-portfolio-text font-semibold text-lg sm:text-xl tracking-wide">Sufiyan</span>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 sm:gap-2 text-portfolio-text-muted text-sm sm:text-base text-center order-3 sm:order-none"
          >
            <span>© 2025 Designed & Developed by Muhammad Sufiyan Fiyaz</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex-shrink-0"
            >
             
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 sm:gap-6 order-2 sm:order-none"
          >
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 text-sm sm:text-base"
            >
              Privacy
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 text-sm sm:text-base"
            >
              Terms
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 text-sm sm:text-base"
            >
              Support
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;