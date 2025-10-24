import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      period: "AUG 2025 - Present",
      title: ".NET Full Stack Developer Trainee",
      company: "NETSOL Technologies",
      type: "experience",
    },
    {
      period: "AUG 2024 - SEP 2024",
      title: ".NET Full Stack Developer",
      company: "NETSOL Technologies",
      type: "experience",
    },
    {
      period: "JUL 2023 - AUG 2023",
      title: "QA Engineer Intern",
      company: "NETSOL Technologies",
      type: "experience",
    },
    {
      period: "JUL 2022 - SEP 2022",
      title: "Flutter Developer Intern",
      company: "NETSOL Technologies",
      type: "experience",
    },
  ];

  const education = [
  {
  period: "2021 - 2025",
  title: "Bachelor in Information Technology (BSIT)",
  company: "Lahore Garrison University",
  type: "education"
},
    {
      period: "2024",
      title: "WEB Development COURSE",
      company: "NS Trainings",
      type: "education",
    },
    {
      period: "2025",
      title: "ISPR Summer Internship",
      company: "ISPR",
      type: "education",
    },
    {
      period: "2023",
      title: "APP Devlopment Course",
      company: "Udemy",
      type: "education",
    },
  ];

  const TimelineCard = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: item.type === "experience" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-portfolio-card border-border hover:border-portfolio-accent/50 transition-all duration-300 p-4 sm:p-6 hover:shadow-card">
        <div className="flex items-start gap-3 sm:gap-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
              item.type === "experience"
                ? "bg-portfolio-accent/10 text-portfolio-accent"
                : "bg-blue-500/10 text-blue-400"
            }`}
          >
            {item.type === "experience" ? (
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </div>

          <div className="flex-1">
            <Badge
              variant="outline"
              className={`mb-2 sm:mb-3 text-xs ${
                item.type === "experience"
                  ? "border-portfolio-accent text-portfolio-accent"
                  : "border-blue-400 text-blue-400"
              }`}
            >
              {item.period}
            </Badge>

            <h3 className="text-base sm:text-lg font-semibold text-portfolio-text mb-1">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base text-portfolio-text-muted">
              {item.company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-portfolio-bg"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            My Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-portfolio-text-muted max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
            My professional journey and academic achievements that shaped my
            career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-portfolio-accent rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {experience.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text">
                Education
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {education.map((item, index) => (
                <TimelineCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
