import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import codeIcon from "@assets/code_1773002108476.png";
import {
  Code2,
  Terminal,
  Database,
  Globe,
  Cpu,
  FolderKanban,
  BarChart2,
  BrainCircuit,
  Network,
  FlaskConical,
  Zap,
  Users,
  DollarSign,
  Headphones,
  MessageCircle,
  Clock,
  CheckCircle,
  Send,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiPatreon } from "react-icons/si";

const WHATSAPP_LINK = "https://wa.me/94772095596";
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61578636952677";
const INSTAGRAM_LINK = "https://www.instagram.com/coding_assignment_help1/";
const PATREON_LINK = "https://patreon.com/CodingAssignmentHelp1?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
];

const services = [
  {
    icon: Code2,
    title: "Java Programming",
    description: "Expert help with Java assignments, OOP concepts, data structures, and enterprise applications.",
  },
  {
    icon: Terminal,
    title: "Python Programming",
    description: "From basic scripts to machine learning projects, we handle all Python assignments with precision.",
  },
  {
    icon: Cpu,
    title: "C / C++ Programming",
    description: "Systems programming, algorithms, memory management, and low-level coding done right.",
  },
  {
    icon: Globe,
    title: "HTML / CSS / JavaScript",
    description: "Beautiful, responsive websites and interactive web applications built to specification.",
  },
  {
    icon: Database,
    title: "MySQL & Databases",
    description: "Database design, complex queries, stored procedures, and data modeling expertise.",
  },
  {
    icon: FolderKanban,
    title: "Programming Projects",
    description: "Full-scale project development with documentation, testing, and clean code delivery.",
  },
  {
    icon: BarChart2,
    title: "Data Science",
    description: "Comprehensive data analysis, visualization, and building complex analyzers for academic research and automated systems.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description: "Predictive modeling, algorithm development, and AI integration using industry-standard libraries and frameworks.",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Advanced topology setups, Cisco Packet Tracer simulations, routing protocols (RIP), and NAT configurations.",
  },
  {
    icon: FlaskConical,
    title: "R Programming",
    description: "Statistical computing, data wrangling, and quantitative analysis tailored for research and academic assignments.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your assignments completed well before your deadline. Rush orders available too.",
  },
  {
    icon: Users,
    title: "Experienced Programmers",
    description: "Our team consists of senior developers with years of real-world coding experience.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Student-friendly pricing that fits your budget without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Reach us anytime, day or night. We're always here to help you succeed.",
  },
];

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Send Assignment via WhatsApp",
    description: "Share your assignment details, requirements, and deadline with us on WhatsApp.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Get Price & Deadline",
    description: "We'll review your assignment and provide a fair quote with a guaranteed delivery time.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Experts Complete Your Work",
    description: "Our skilled programmers work on your assignment ensuring high-quality, original code.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Receive Completed Work",
    description: "Get your completed assignment delivered on time, tested and ready to submit.",
  },
];

const testimonials = [
  {
    name: "Alex Thompson",
    location: "Stanford University, USA",
    flag: "🇺🇸",
    text: "Great service! They helped me finish my Python project quickly. The code was clean and well-documented. Saved my semester!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    location: "MIT, USA",
    flag: "🇺🇸",
    text: "I was struggling with my Java data structures assignment. These guys delivered it perfectly in just 24 hours. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jordan Rivera",
    location: "UCLA, USA",
    flag: "🇺🇸",
    text: "Affordable and reliable. They've helped me with multiple C++ and database projects. Always on time with excellent quality work.",
    rating: 5,
  },
  {
    name: "Oliver Hartley",
    location: "University of London, UK",
    flag: "🇬🇧",
    text: "Absolutely brilliant service! Had a tricky JavaScript web app assignment and they nailed it. Very professional and quick turnaround.",
    rating: 5,
  },
  {
    name: "Emma Clarke",
    location: "University of Manchester, UK",
    flag: "🇬🇧",
    text: "Really impressed with the quality of the Python machine learning code they delivered. Everything was well-commented and easy to understand.",
    rating: 5,
  },
  {
    name: "Liam Nguyen",
    location: "University of Toronto, Canada",
    flag: "🇨🇦",
    text: "Used this service for my database design project and got an A+! Super affordable for a student like me. Will definitely use again.",
    rating: 5,
  },
  {
    name: "Sophia Patel",
    location: "University of British Columbia, Canada",
    flag: "🇨🇦",
    text: "They completed my C++ algorithms assignment before the deadline. The code quality was excellent and fully explained. Great value!",
    rating: 5,
  },
  {
    name: "Khalid Al Mansoori",
    location: "American University of Sharjah, UAE",
    flag: "🇦🇪",
    text: "Very reliable team. They handled my Java OOP project perfectly. Communication was smooth and the work was submitted well ahead of time.",
    rating: 5,
  },
  {
    name: "Erik Lindstrom",
    location: "University of Oslo, Norway",
    flag: "🇳🇴",
    text: "Exceptional quality work on my web development assignment. The HTML, CSS and JavaScript was clean and responsive. Totally worth it!",
    rating: 5,
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
            data-testid="link-home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={codeIcon} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
            <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Coding Assignment Help
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors rounded-md hover-elevate"
                data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" data-testid="button-order-nav">
                <SiWhatsapp className="mr-2 h-4 w-4" />
                Order Now
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground text-left rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-4 pt-2">
                <Button className="w-full" data-testid="button-order-mobile">
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  Order Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-indigo-600/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Code2 className="h-4 w-4" />
              Trusted by 1,000+ Students
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight" data-testid="text-hero-title">
              Struggling With{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Coding Assignments
              </span>
              ?
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-subtitle">
              We help students with Java, Python, C/C++, Web Development, and Database projects. Expert programmers, on-time delivery, every time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-order-hero">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                data-testid="button-learn-more"
                onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% Original Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 max-w-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">assignment.py</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-purple-500 dark:text-purple-400">def</span>{" "}
                    <span className="text-blue-500 dark:text-blue-400">solve_assignment</span>
                    <span className="text-muted-foreground">(</span>
                    <span className="text-orange-500 dark:text-orange-400">problem</span>
                    <span className="text-muted-foreground">):</span>
                    {"\n"}
                    {"    "}
                    <span className="text-muted-foreground">{"# Expert solution"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-purple-500 dark:text-purple-400">solution</span>
                    {" = "}
                    <span className="text-blue-500 dark:text-blue-400">analyze</span>
                    <span className="text-muted-foreground">(</span>
                    <span className="text-orange-500 dark:text-orange-400">problem</span>
                    <span className="text-muted-foreground">)</span>
                    {"\n"}
                    {"    "}
                    <span className="text-purple-500 dark:text-purple-400">code</span>
                    {" = "}
                    <span className="text-blue-500 dark:text-blue-400">implement</span>
                    <span className="text-muted-foreground">(</span>
                    <span className="text-purple-500 dark:text-purple-400">solution</span>
                    <span className="text-muted-foreground">)</span>
                    {"\n"}
                    {"    "}
                    <span className="text-purple-500 dark:text-purple-400">return</span>{" "}
                    <span className="text-green-500 dark:text-green-400">"A+ Grade"</span>
                    {" "}
                    <span className="text-muted-foreground">{"✓"}</span>
                  </code>
                </pre>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={codeIcon} alt="Code" className="w-8 h-8 rounded-md" />
                    <span className="text-xs text-muted-foreground">Ready to submit</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-medium">
                    <CheckCircle className="h-3.5 w-3.5" />
                    All tests passed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/30" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            <Terminal className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-services-title">
            Expert Help Across All{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Programming Languages
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whatever your assignment requires, our experienced developers have you covered.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="p-6 hover-elevate transition-all duration-300 h-full" data-testid={`card-service-${i}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-service-title-${i}`}>{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-28" data-testid="section-why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-why-title">
            Why Students{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We've helped thousands of students achieve their academic goals with reliable, high-quality programming help.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-center p-6" data-testid={`feature-block-${i}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${i}`}>{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-muted/30" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-how-title">
            Get Help in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From sending your assignment to receiving the completed work - it's that easy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="text-center" data-testid={`step-block-${i}`}>
                <div className="relative inline-flex mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2" data-testid={`text-step-title-${i}`}>{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <Card
      className="p-6 flex flex-col shrink-0 w-80 sm:w-96"
      data-testid={`card-testimonial-${index}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, j) => (
            <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xl" aria-label={testimonial.location}>{testimonial.flag}</span>
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground mb-4" data-testid={`text-testimonial-${index}`}>
        "{testimonial.text}"
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </Card>
  );
}

function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const animFrameRef = useRef<number>(0);
  const posRef = useRef(0);

  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current && track) {
        posRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-28" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" data-testid="text-testimonials-title">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Students from around the world trust us with their programming assignments.
          </p>
        </motion.div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        data-testid="testimonials-carousel"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-5 pb-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} index={i % testimonials.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-visible"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] rounded-3xl" />
          <div className="relative text-center py-16 sm:py-20 px-6 sm:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" data-testid="text-cta-title">
              Need Help With Your
              <br />
              Coding Assignment?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
              Get in touch now and let our expert programmers handle your assignment. Fast, reliable, and affordable.
            </p>
            <div className="mt-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-700 border-white"
                  data-testid="button-order-cta"
                >
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/50" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={codeIcon} alt="Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Coding Assignment Help
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs" data-testid="text-footer-description">
              Professional programming assignment help for students worldwide. Quality code, on-time delivery, every time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground text-left transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4 text-green-500" />
                +94 77 209 5596
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-chat"
              >
                <MessageCircle className="h-4 w-4 text-blue-500" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-4 w-4 text-blue-600" />
                Facebook
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-4 w-4 text-pink-500" />
                Instagram
              </a>
              <a
                href={PATREON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors"
                data-testid="link-footer-patreon"
              >
                <SiPatreon className="h-4 w-4 text-orange-500" />
                Patreon
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
            2026 Coding Assignment Help. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
              data-testid="button-social-whatsapp"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="h-4 w-4 text-green-500" />
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
              data-testid="button-social-facebook"
              aria-label="Facebook"
            >
              <SiFacebook className="h-4 w-4 text-blue-600" />
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
              data-testid="button-social-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="h-4 w-4 text-pink-500" />
            </a>
            <a
              href={PATREON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
              data-testid="button-social-patreon"
              aria-label="Patreon"
            >
              <SiPatreon className="h-4 w-4 text-orange-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
