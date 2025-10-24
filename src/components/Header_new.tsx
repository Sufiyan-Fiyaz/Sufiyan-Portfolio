import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#experience" },
    { label: "Testimonials", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-portfolio-bg/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 sm:gap-8 max-w-7xl mx-auto sm:px-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'Ballet, cursive' }}>A</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden sm:block"
          >
            <Button 
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm sm:text-base px-3 sm:px-4 py-2"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Adeel_Resume.pdf';
                link.download = 'Adeel_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
              <Download className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </Button>
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={toggleMenu}
            className="sm:hidden p-2 text-portfolio-text hover:text-portfolio-accent transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed inset-0 z-40"
              style={{
                background: `
                  linear-gradient(90deg, 
                    rgba(15, 15, 24, 0.85) 0%, 
                    rgba(30, 20, 40, 0.75) 30%, 
                    rgba(15, 15, 24, 0.65) 50%, 
                    rgba(15, 15, 24, 0.45) 70%,
                    rgba(15, 15, 24, 0.25) 100%
                  ),
                  radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
                `,
                backdropFilter: 'blur(25px) saturate(150%) brightness(110%)'
              }}
              onClick={closeMenu}
            >
              {/* Enhanced Glass Effect Layers */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.02) 0%, 
                      rgba(255, 255, 255, 0.05) 50%, 
                      rgba(255, 255, 255, 0.08) 100%
                    )
                  `,
                  backdropFilter: 'blur(30px) saturate(180%)'
                }}
              />
              
              {/* Additional Glass Layer for Right Side */}
              <div 
                className="absolute top-0 right-0 w-3/5 h-full"
                style={{
                  background: `
                    linear-gradient(90deg, 
                      transparent 0%, 
                      rgba(255, 255, 255, 0.03) 30%,
                      rgba(255, 255, 255, 0.06) 70%,
                      rgba(255, 255, 255, 0.1) 100%
                    )
                  `,
                  backdropFilter: 'blur(35px) saturate(200%) brightness(115%)'
                }}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 h-full w-80 max-w-[80vw] p-6 shadow-2xl"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(15, 15, 24, 0.95) 0%,
                      rgba(30, 20, 40, 0.92) 25%,
                      rgba(40, 25, 50, 0.95) 50%,
                      rgba(30, 20, 40, 0.92) 75%,
                      rgba(15, 15, 24, 0.95) 100%
                    ),
                    linear-gradient(90deg, 
                      rgba(255, 255, 255, 0.02) 0%, 
                      rgba(255, 255, 255, 0.05) 100%
                    )
                  `,
                  backdropFilter: 'blur(40px) saturate(160%) brightness(105%)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: `
                    0 25px 50px -12px rgba(139, 92, 246, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.12),
                    inset 0 0 30px rgba(139, 92, 246, 0.05)
                  `
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full pt-16">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-6 flex-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.1 }}
                        onClick={closeMenu}
                        className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-300 text-lg font-medium py-2 border-b border-border/50 hover:border-portfolio-accent/50"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </nav>

                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-6 border-t border-border/50"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Adeel_Resume.pdf';
                        link.download = 'Adeel_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        closeMenu();
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
