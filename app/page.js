"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Award,
  Briefcase,
  Code,
  GraduationCap,
  Download,
  Calendar,
  Gitlab,
} from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiOpenjdk,
  SiPython,
  SiPhp,
  SiDotnet,
  SiSymfony,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiApachekafka,
  SiDocker,
  SiJenkins,
  SiGitlab,
  SiGrafana,
  SiPrometheus,
  SiGit,
  SiPostman,
  SiSonarqube,
  SiSonatype,
  SiKeycloak,
} from "react-icons/si";
import {
  FaLink,
  FaArrowsRotate,
  FaDiagramProject,
  FaHandshake,
} from "react-icons/fa6";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations/translation";
import LanguageToggle from "./components/LanguageToggle";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const fullText = "MEDDEB SOUFIENE";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target.closest(
        "a, button, .hover-lift, .glass, .neon-button, .neon-outline",
      );
      setIsHovering(Boolean(target));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleHover);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleHover);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden ${
        isHovering ? "cursor-hover" : ""
      }`}
    >
      <div className="bg-animation" />
      <div className="scanlines" />
      <div
        className="cursor-dot"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      <div
        className="cursor-outline"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      {/* Enhanced ambient background effect */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 249, 0.18), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 neon-nav ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <div
            className="font-playfair text-2xl font-bold tracking-tight cursor-pointer group relative"
            onClick={() => scrollToSection("home")}
          >
            <span className="font-bold">
              <span style={{ color: "rgb(0, 255, 249)" }}>{displayedText.slice(0, 6)}</span>
              <span className="text-white">{displayedText.slice(6)}</span>
            </span>
            {!isTypingComplete && (
              <span className="inline-block w-0.5 h-6 bg-yellow-500 ml-1 animate-blink"></span>
            )}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-10 font-dm-sans text-sm uppercase tracking-widest items-center">
            {Object.values(t.nav).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-500"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-500"></span>
                )}
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="text-slate-100 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800">
            <div className="px-6 py-4 space-y-3">
              {Object.values(t.nav).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 uppercase tracking-widest text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-yellow-500"
                      : "text-slate-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 md:px-8 pt-32"
      >
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-cyan-800/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* LEFT COLUMN */}
            <div className="space-y-6 md:space-y-8 opacity-0 animate-fadeInUp">
              <span className="px-4 py-2 rounded-full text-xs uppercase tracking-widest font-dm-sans inline-flex items-center gap-2 neon-tag floating">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                {t.hero.available}
              </span>

              <div>
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
                  {t.hero.name}
                  <br />
                  <span className="gradient-text">{t.hero.surname}</span>
                </h1>
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-px w-16 bg-yellow-500"></div>
                  <p className="font-cormorant text-xl md:text-2xl text-slate-300 italic">
                    {t.hero.title}
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg font-dm-sans">
                {t.hero.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <span>{t.hero.yearsStudy}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Briefcase className="w-4 h-4 text-yellow-500" />
                  <span>{t.hero.internships}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=meddebsoufiene28@gmail.com&su=Contact%20from%20portfolio&body=Hello%20Soufiene,"
                  className="group px-6 md:px-8 py-3 md:py-4 neon-button font-dm-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.hero.contactMe}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/cv/Soufiene-Meddeb-26.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 md:px-8 py-3 md:py-4 neon-outline font-dm-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {t.hero.downloadCV}
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/soufiene-meddeb-607219213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Meddebsofien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://gitlab.com/meddebsofien5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-700 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
                >
                  <Gitlab className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 opacity-0 animate-fadeInUp stagger-2">
              {/* Photo Card - Version Professionnelle */}
              <div className="glass p-6 md:p-8 hover-lift group shimmer-border">
                <div className="relative w-full max-w-xs mx-auto mb-2">
                  {/* Solid Background Effect */}
                  <div className="absolute inset-0 bg-yellow-500/10 blur-2xl"></div>
                  
                  {/* Photo Container */}
                  <div className="relative">
                    {/* Decorative Border */}
                    <div className="absolute -inset-1 bg-yellow-500 rounded-lg opacity-50 blur-sm"></div>
                    
                    {/* Image Wrapper */}
                    <div className="relative bg-slate-950 rounded-lg overflow-hidden border-2 border-slate-800">
                      <div className="aspect-square w-full">
                        <img
                          src="/images/sofiene.png"
                          alt="Soufiene Meddeb - Software Engineer"
                          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Solid Overlay */}
                      <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-1">
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-slate-100 mb-1">
                      {t.hero.name} {t.hero.surname}
                    </h3>
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-yellow-500"></div>
                      <p className="text-yellow-500 font-dm-sans text-sm uppercase tracking-wider">
                        {t.hero.title}
                      </p>
                      <div className="h-px w-8 bg-yellow-500"></div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-yellow-500 font-dm-sans uppercase tracking-wider">
                      {t.hero.available}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="glass p-6 md:p-8 space-y-6 hover-lift shimmer-border">
                <h3 className="font-playfair text-2xl font-bold">
                  {t.hero.contact}
                </h3>
                <a
                  href="mailto:meddebsoufiene28@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.email}
                    </div>
                    <div className="text-slate-200 group-hover:text-yellow-500">
                      meddebsoufiene28@gmail.com
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+491771577695"
                  className="flex items-start gap-4 group"
                >
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.phone}
                    </div>
                    <div className="text-slate-200 group-hover:text-yellow-500">
                      +49 177 157 7695
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">
                      {t.hero.location}
                    </div>
                    <div className="text-slate-200">{t.hero.locationValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-yellow-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.about.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.about.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Profile */}
            <div className="lg:col-span-3 space-y-6">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-cormorant">
                  {t.about.description1}
                </p>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-dm-sans">
                  {t.about.description2}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    5+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.yearsStudy}
                  </div>
                </div>
                <div className="text-center border-x border-slate-800">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    10+
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.completedProjects}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500">
                    2
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 mt-2 font-dm-sans uppercase tracking-wider">
                    {t.about.internships}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-none p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
                  <h3 className="font-playfair text-xl md:text-2xl font-bold">
                    {t.about.education}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-yellow-500 pl-4">
                    <div className="font-dm-sans font-semibold text-sm md:text-base text-slate-200">
                      {t.about.degree}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {t.about.university}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {t.about.period}
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4">
                    <div className="font-dm-sans font-semibold text-sm md:text-base text-slate-200">
                      {t.about.license}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {t.about.university2}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {t.about.period2}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-none p-6 md:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 md:w-6 h-5 md:h-6 text-yellow-500" />
                  <h3 className="font-playfair text-xl md:text-2xl font-bold">
                    {t.about.languages}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.french}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelProfessional}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.english}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelIntermediate}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[70%] bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.arabic}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelNative}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm md:text-base text-slate-300 font-dm-sans">
                        {t.about.german}
                      </span>
                      <span className="text-xs text-yellow-500 uppercase tracking-wider">
                        {t.about.levelBasic}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 md:py-32 px-6 md:px-8 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.experience.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.experience.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Experience 1 */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 group">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <div className="text-xs md:text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    {t.experience.exp1.period}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {t.experience.exp1.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400">
                    {t.experience.exp1.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-500 mt-1">
                    {t.experience.exp1.client}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-6 md:p-8 hover-lift border-l-4 border-yellow-500">
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-300 font-dm-sans">
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task1}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task2}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp1.task3}</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {[
                      "Spring Boot",
                      "Angular",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "Docker",
                      "JWT",
                      "REST API",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 md:px-3 py-1 md:py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-dm-sans uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 group">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <div className="text-xs md:text-sm text-yellow-500 uppercase tracking-widest font-dm-sans mb-2">
                    {t.experience.exp2.period}
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
                    {t.experience.exp2.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-400">
                    {t.experience.exp2.company}
                  </p>
                  <p className="text-sm md:text-base text-slate-500 mt-1">
                    {t.experience.exp2.client}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass rounded-none p-6 md:p-8 hover-lift border-l-4 border-cyan-700">
                  <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-slate-300 font-dm-sans">
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp2.task1}</span>
                    </li>
                    <li className="flex gap-3 md:gap-4">
                      <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <span>{t.experience.exp2.task2}</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                    {["Spring Boot", "Angular", "REST API", "MySQL"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 md:px-3 py-1 md:py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-dm-sans uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.projects.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.projects.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 - Knowledge Platform */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-yellow-500 flex items-center justify-center text-yellow-500 font-playfair text-xl md:text-2xl font-bold">
                  01
                </div>
                <Briefcase className="w-6 md:w-8 h-6 md:h-8 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                {t.projects.project1.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project1.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task2}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-yellow-500">→</span>
                  <span>{t.projects.project1.task3}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
                {[
                  "Spring Boot",
                  "Angular",
                  "Kafka",
                  "Docker",
                  "GitLab CI/CD",
                  "Keycloak",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500/10 border border-slate-500/20 text-yellow-500 text-xs font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 - Esprit Talent */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-cyan-700 flex items-center justify-center text-cyan-500 font-playfair text-xl md:text-2xl font-bold">
                  02
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                {t.projects.project2.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project2.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>{t.projects.project2.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-cyan-500">→</span>
                  <span>{t.projects.project2.task2}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Jenkins",
                  "Docker",
                  "SonarQube",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500/10 border border-slate-500/20 text-cyan-500 text-xs font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 - CI/CD Pipeline */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-green-700 flex items-center justify-center text-green-500 font-playfair text-xl md:text-2xl font-bold">
                  03
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                {t.projects.project3.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project3.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-green-500">→</span>
                  <span>{t.projects.project3.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-green-500">→</span>
                  <span>{t.projects.project3.task2}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-green-500">→</span>
                  <span>{t.projects.project3.task3}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {[
                  "Jenkins",
                  "Spring Boot",
                  "Angular",
                  "SonarQube",
                  "Nexus",
                  "Grafana",
                  "Prometheus",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500/10 border border-slate-500/20 text-green-500 text-xs font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 4 - Airport Management */}
            <div className="glass rounded-none p-6 md:p-10 hover-lift group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-purple-700 flex items-center justify-center text-purple-500 font-playfair text-xl md:text-2xl font-bold">
                  04
                </div>
                <Code className="w-6 md:w-8 h-6 md:h-8 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                {t.projects.project4.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 mb-4 font-dm-sans">
                {t.projects.project4.subtitle}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 text-sm md:text-base text-slate-300 font-dm-sans">
                <li className="flex gap-2 md:gap-3">
                  <span className="text-purple-500">→</span>
                  <span>{t.projects.project4.task1}</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="text-purple-500">→</span>
                  <span>{t.projects.project4.task2}</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                {[
                  "ASP.NET Core",
                  "C#",
                  "Entity Framework",
                  "SQL Server",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500/10 border border-slate-500/20 text-purple-500 text-xs font-dm-sans uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="skills-neo py-20 md:py-32 px-6 md:px-8"
      >
        <div className="section-header">
          <div className="section-tag">{t.skills.sectionTitle}</div>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="skills-categories">
          <div className="category-section">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              {t.skills.frontendDev}
            </h3>
            <div className="skills-grid">
              {[
                { Icon: SiReact, name: "React.js", color: "text-cyan-300" },
                { Icon: SiAngular, name: "Angular", color: "text-red-400" },
                { Icon: SiHtml5, name: "HTML/CSS", color: "text-orange-400" },
                { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-300" },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className={`skill-icon ${skill.color}`}>
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              {t.skills.backendDev}
            </h3>
            <div className="skills-grid">
              {[
                { Icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
                { Icon: SiExpress, name: "Express.js", color: "text-slate-300" },
                { Icon: SiSpringboot, name: "Spring Boot", color: "text-emerald-300" },
                { Icon: SiOpenjdk, name: "Java", color: "text-red-300" },
                { Icon: SiPython, name: "Python", color: "text-yellow-300" },
                { Icon: SiPhp, name: "PHP", color: "text-indigo-300" },
                { Icon: SiDotnet, name: ".NET", color: "text-purple-300" },
                { Icon: SiSymfony, name: "Symfony", color: "text-slate-200" },
                { Icon: SiLaravel, name: "Laravel", color: "text-rose-400" },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className={`skill-icon ${skill.color}`}>
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">
              <span className="category-icon">�️</span>
              {t.skills.database}
            </h3>
            <div className="skills-grid">
              {[
                { Icon: SiMongodb, name: "MongoDB", color: "text-green-300" },
                { Icon: SiMysql, name: "MySQL", color: "text-sky-300" },
                { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className={`skill-icon ${skill.color}`}>
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">
              <span className="category-icon">�🔧</span>
              {t.skills.devopsCloud}
            </h3>
            <div className="skills-grid">
              {[
                { Icon: SiDocker, name: "Docker", color: "text-cyan-300" },
                { Icon: SiJenkins, name: "Jenkins", color: "text-orange-300" },
                { Icon: FaArrowsRotate, name: "CI/CD Pipeline", color: "text-amber-300" },
                { Icon: SiGitlab, name: "GitLab", color: "text-rose-400" },
                { Icon: SiGrafana, name: "Grafana", color: "text-yellow-300" },
                { Icon: SiPrometheus, name: "Prometheus", color: "text-red-400" },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className={`skill-icon ${skill.color}`}>
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="category-section">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              {t.skills.toolsArchitecture}
            </h3>
            <div className="skills-grid">
              {[
                { Icon: SiGit, name: "Git", color: "text-orange-300" },
                { Icon: SiPostman, name: "Postman", color: "text-amber-300" },
                { Icon: FaDiagramProject, name: "Microservices", color: "text-cyan-300" },
                { Icon: FaLink, name: "RESTful API", color: "text-cyan-300" },
                { Icon: SiApachekafka, name: "Kafka", color: "text-orange-300" },
                { Icon: SiSonarqube, name: "SonarQube", color: "text-sky-300" },
                { Icon: SiSonatype, name: "Nexus", color: "text-purple-300" },
                { Icon: SiKeycloak, name: "Keycloak", color: "text-red-300" },
                { Icon: FaHandshake, name: "Agile", color: "text-emerald-300" },
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className={`skill-icon ${skill.color}`}>
                    <skill.Icon className="w-10 h-10" />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 md:mb-20">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500 font-dm-sans">
              {t.contact.sectionTitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-black mt-4 mb-6">
              {t.contact.title}
            </h2>
            <div className="h-1 w-20 md:w-24 bg-yellow-500 mx-auto"></div>
          </div>

          <p className="text-lg md:text-2xl text-slate-300 mb-12 md:mb-16 max-w-2xl mx-auto font-cormorant italic">
            {t.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=meddebsoufiene28@gmail.com&su=Contact%20from%20portfolio&body=Hello%20Soufiene,"
              className="group px-8 md:px-10 py-4 md:py-5 bg-yellow-500 text-slate-950 font-dm-sans font-bold rounded-none hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base cursor-pointer"
            >
              <Mail className="w-5 md:w-6 h-5 md:h-6" />
              {t.contact.sendEmail}
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Meddebsofien"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-10 py-4 md:py-5 border-2 border-slate-700 font-dm-sans font-bold rounded-none hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base"
            >
              <Github className="w-5 md:w-6 h-5 md:h-6" />
              {t.contact.viewGithub}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 md:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-playfair text-2xl font-bold group cursor-pointer">
              <span className="inline-block transition-all duration-500 hover:scale-110 hover:rotate-12 text-yellow-500 hover:text-cyan-400">S</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-pink-500">o</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-purple-500">u</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-cyan-400">f</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-pink-500">i</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-purple-500">e</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-cyan-400">n</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-yellow-500 hover:text-pink-500">e</span>
              <span className="mx-2"></span>
              <span className="inline-block transition-all duration-500 hover:scale-110 hover:-rotate-12 text-slate-100 hover:text-yellow-500">M</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-slate-100 hover:text-cyan-400">e</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-slate-100 hover:text-pink-500">d</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-slate-100 hover:text-purple-500">d</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-slate-100 hover:text-cyan-400">e</span>
              <span className="inline-block transition-all duration-500 hover:scale-110 text-slate-100 hover:text-pink-500">b</span>
            </div>
            <div className="text-slate-500 font-dm-sans text-xs md:text-sm text-center">
              &copy; 2026 <span className="bg-gradient-to-r from-yellow-500 via-cyan-400 to-yellow-500 bg-clip-text text-transparent font-bold">{displayedText}</span>. {t.footer.rights}
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://linkedin.com/in/soufiene-meddeb-607219213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Meddebsofien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://gitlab.com/meddebsofien5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-500 transition-colors"
                aria-label="GitLab"
              >
                <Gitlab className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=meddebsoufiene28@gmail.com&su=Contact%20from%20portfolio&body=Hello%20Soufiene,"
                className="text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}