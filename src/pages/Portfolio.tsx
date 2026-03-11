import { useState } from "react";
import { Download, Github, Linkedin, Mail, ArrowUpRight, Menu, X } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Autonomous Multi-Agent Research Assistant",
    description:
      "Designed an agentic multi-agent system for autonomous task delegation and coordinated reasoning. Integrated Pinecone vector memory for RAG-based contextual retrieval and long-term memory, with a Streamlit UI for structured, AI-verified research outputs.",
    tags: ["LangChain", "CrewAI", "LangGraph", "Pinecone", "Gemini", "Streamlit"],
    image: project1,
  },
  {
    title: "Behavior-Based Intranet Attack Detection",
    description:
      "Developed an AI-driven intrusion detection system for real-time anomaly detection in intranet traffic. Implemented Random Forest and SVM models achieving 95%+ detection accuracy with a Flask-based monitoring dashboard.",
    tags: ["Python", "Flask", "Scikit-learn", "MySQL"],
    image: project2,
  },
  {
    title: "Mental Health Assessment System",
    description:
      "Built a predictive analytics system to assess early mental health risks using lifestyle and emotional data. Optimized ML models to achieve 92% accuracy in depression and anxiety classification with an interactive Streamlit app.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Predictive Analytics"],
    image: project3,
  },
];

const SKILLS = [
  {
    title: "AI & LLMs",
    items: ["Prompt Engineering", "LangChain", "CrewAI", "LangGraph", "RAG Architectures"],
  },
  {
    title: "Programming & Backend",
    items: ["Python", "C++", "Flask", "REST APIs", "MySQL"],
  },
  {
    title: "Data & Cloud",
    items: ["Pandas", "NumPy", "Scikit-learn", "Google Cloud", "BigQuery"],
  },
];

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold text-foreground">
            HL.
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden md:block btn-primary">
            Let's Talk
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
              Let's Talk
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="section-label">// AGENTIC AI ENGINEER</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Building <br />
              <span className="highlight-text">Intelligent</span> <br />
              AI Systems
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
              I design and build autonomous, reasoning-driven multi-agent systems using LLMs,
              LangChain, CrewAI, and RAG architectures. Passionate about delivering scalable,
              real-world AI solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/H.LASYA_RESUME.docx" download className="btn-primary inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#about" className="btn-outline inline-flex items-center gap-2">
                About Me
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <img
              src={heroArt}
              alt="Abstract AI neural network art"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">// ABOUT</p>
          <h2 className="section-title mb-8">
            Engineering AI, <br />
            <span className="highlight-text">one agent at a time.</span>
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I'm Hanumandla Lasya — a passionate Information Technology student at Mahatma Gandhi
              Institute of Technology, Hyderabad, specializing in Agentic and Generative AI. I build
              autonomous, reasoning-driven multi-agent systems using LLMs, LangChain, CrewAI,
              LangGraph, RAG, and vector memory.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              I'm strongly motivated to deliver scalable, real-world AI solutions through continuous
              learning and innovation. When I'm not building AI systems, I'm exploring new frameworks
              and earning certifications to sharpen my craft.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <p className="stat-value">8.02</p>
              <p className="stat-label">CGPA (B.Tech IT)</p>
            </div>
            <div>
              <p className="stat-value">3+</p>
              <p className="stat-label">AI Projects Built</p>
            </div>
            <div>
              <p className="stat-value">7+</p>
              <p className="stat-label">Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">// SELECTED WORK</p>
          <h2 className="section-title mb-12">
            Featured <span className="highlight-text">Projects</span>
          </h2>
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <div key={project.title} className="project-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">// SKILLS</p>
          <h2 className="section-title mb-12">
            Tech <span className="highlight-text">Stack</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((group) => (
              <div key={group.title} className="skill-card">
                <h3 className="font-mono text-sm font-semibold text-foreground mb-4">
                  {group.title}
                </h3>
                <div>
                  {group.items.map((item) => (
                    <p key={item} className="skill-item">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="section-label">// CONTACT</p>
          <h2 className="section-title mb-6">
            Let's Work <br />
            <span className="highlight-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            I'm currently open to Agentic AI Engineer roles and new opportunities. Whether you have
            a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <a
            href="mailto:lasyalucky0635@gmail.com"
            className="btn-primary inline-flex items-center gap-2 text-lg mb-10"
          >
            <Mail className="w-5 h-5" />
            lasyalucky0635@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/lasya1230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-mono text-sm">GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lasya-hanumandla-691052281/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-mono text-sm">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 H. Lasya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
