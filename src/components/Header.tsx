import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [prevActiveSection, setPrevActiveSection] = useState("home");
  
  const navItems = [
    { label: "Home", href: "#hero", section: "home" },
    { label: "Services", href: "#services", section: "services" },
    { label: "Portfolio", href: "#portfolio", section: "portfolio" },
    { label: "About", href: "#experience", section: "experience" },
    { label: "Testimonials", href: "#skills", section: "skills" },
    { label: "Contact", href: "#contact", section: "contact" }
  ];

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", section: "home" },
        { id: "services", section: "services" },
        { id: "portfolio", section: "portfolio" },
        { id: "experience", section: "experience" },
        { id: "skills", section: "skills" },
        { id: "contact", section: "contact" }
      ];

      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i].section) {
            setPrevActiveSection(activeSection);
            setActiveSection(sections[i].section);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center space-x-2 flex-shrink-0"
          >
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'Ballet, cursive' }}>S</span>
</div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.section
                    ? "text-portfolio-accent"
                    : "text-portfolio-text-muted hover:text-portfolio-accent"
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-portfolio-accent to-purple-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeSection === item.section ? "100%" : 0
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: activeSection === item.section ? 0 : 0
                  }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden xl:block flex-shrink-0"
          >
            <Button 
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm sm:text-base px-3 sm:px-4 py-2"
              onClick={() => {
                // Create a temporary link to download the CV
                const link = document.createElement('a');
                link.href = '/Muhammad Sufiyan Fiyaz - Resume.pdf';
                link.download = 'Muhammad Sufiyan Fiyaz - Resume.pdf';
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

          {/* Mobile/Tablet Hamburger Menu */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={toggleMenu}
            className="xl:hidden p-2 text-portfolio-text hover:text-portfolio-accent transition-colors z-50 relative"
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
              className="xl:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full z-40"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: `
                  radial-gradient(circle at 40% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 60%),
                  rgba(15, 15, 24, 0.85)
                `,
                backdropFilter: 'blur(12px)',
                zIndex: 40
              }}
              onClick={closeMenu}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 h-full w-80 sm:w-96 md:w-[420px] lg:w-[480px] max-w-[85vw] bg-portfolio-bg/85 backdrop-blur-md border-l border-portfolio-accent/20 p-6 sm:p-8 shadow-xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(15, 15, 24, 0.88) 0%,
                    rgba(25, 20, 35, 0.85) 50%,
                    rgba(15, 15, 24, 0.88) 100%
                  )`,
                  boxShadow: `
                    0 20px 40px -10px rgba(139, 92, 246, 0.2),
                    0 0 0 1px rgba(139, 92, 246, 0.08)
                  `
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full pt-16 sm:pt-20 md:pt-24">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-3 flex-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.1 }}
                        onClick={closeMenu}
                        className={`relative text-lg sm:text-xl md:text-2xl font-medium py-2 sm:py-2 transition-colors duration-300 inline-block ${
                          activeSection === item.section
                            ? "text-portfolio-accent"
                            : "text-portfolio-text hover:text-portfolio-accent"
                        }`}
                      >
                        <span className="relative inline-block">
                          {item.label}
                          {activeSection === item.section && (
                            <>
                              {/* Glowing underline effect */}
                              <motion.div
                                key={`mobile-underline-glow-${item.section}`}
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0, opacity: 0 }}
                                transition={{ 
                                  duration: 0.5, 
                                  ease: [0.16, 1, 0.3, 1]
                                }}
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-portfolio-accent via-purple-400 to-purple-500 origin-center rounded-full"
                                style={{
                                  filter: 'blur(0.5px)',
                                  boxShadow: '0 0 8px rgba(139, 92, 246, 0.6)'
                                }}
                              />
                              {/* Solid underline */}
                              <motion.div
                                key={`mobile-underline-solid-${item.section}`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ 
                                  duration: 0.4, 
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: 0.1
                                }}
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-portfolio-accent to-purple-500 origin-center rounded-full"
                              />
                            </>
                          )}
                        </span>
                      </motion.a>
                    ))}
                    
                    {/* Mobile/Tablet CV Download Button - Positioned after navigation links */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * navItems.length + 0.1 }}
                      className="pt-6 sm:pt-8"
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base sm:text-lg py-3 sm:py-4"
                        onClick={() => {
                          // Create a temporary link to download the CV
                          const link = document.createElement('a');
                          link.href = '/Adeel_Resume.pdf';
                          link.download = 'Adeel_Resume.pdf';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          closeMenu();
                        }}
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Download CV
                      </Button>
                    </motion.div>
                  </nav>
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