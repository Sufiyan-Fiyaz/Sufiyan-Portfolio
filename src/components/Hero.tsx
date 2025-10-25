import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, Github, Linkedin } from "lucide-react";

import profileImage from "@/assets/Sufiyan-Profile.png";

const Hero = () => {
  const stats = [
    { number: "1", label: "Year Experience"},
    { number: "3+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction", isActive: true}
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sufiyan-Fiyaz" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sufiyanfiyaz/" },
  
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 sm:pt-36 md:pt-32 lg:pt-28 xl:pt-24 px-4 sm:px-6 bg-portfolio-bg relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-0"
            >
              <Badge variant="outline" className="text-white font-bold mb-0 px-4 sm:px-8 py-2 mt-8 sm:mt-16 text-base sm:text-lg lg:text-[24px] border border-portfolio-accent bg-transparent">
                Hi, I am Sufiyan 
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="-mt-1 sm:-mt-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-portfolio-accent to-portfolio-text bg-clip-text text-transparent">.NET Full Stack</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-portfolio-text-muted max-w-sm sm:max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              .NET Full Stack Developer building smart, scalable solutions that bring together powerful backend systems and smooth, engaging user experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Handshake className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-portfolio-card hover:bg-portfolio-accent rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                  >
                    <social.icon className="w-5 h-5 text-portfolio-text group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 pt-6 sm:pt-8 justify-items-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                  className={`text-center ${stat.isActive ? 'opacity-100' : 'opacity-70'}`}
                >
                  <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 ${
                    stat.isActive ? 'text-portfolio-accent' : 'text-portfolio-text'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-portfolio-text-muted leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 z-10"
          >
            <div className="relative z-10">
              {/* Glow Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-glow rounded-2xl sm:rounded-3xl blur-xl opacity-50 z-0"
              />
              
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-card border border-border/20 z-10"
              >
                <img
                  src={profileImage}
                  alt="Sufiyan - .NET Full Stack"
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/20 to-transparent z-10" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-6 -right-6 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow z-20"
                style={{ 
                  zIndex: 20,
                  position: 'absolute'
                }}
              >
                <span className="text-white font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Ballet, cursive' }}>S</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;