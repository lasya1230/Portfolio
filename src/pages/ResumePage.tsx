import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, Award, BookOpen, Code, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const skills = [
  { category: "LLMs", items: ["Prompt Engineering", "LLM Reasoning", "Task Planning"] },
  { category: "Agentic AI", items: ["LangChain", "CrewAI", "LangGraph"] },
  { category: "Multi-Agent Systems", items: ["Agent Coordination", "Task Delegation", "Collaborative AI"] },
  { category: "RAG", items: ["Vector Embeddings", "Retrieval Pipelines", "Context-Aware Responses"] },
  { category: "Programming", items: ["Python", "C++", "Flask", "REST APIs"] },
  { category: "Data & Cloud", items: ["Pandas", "NumPy", "Google Cloud", "BigQuery", "Document AI"] },
];

const projects = [
  {
    title: "Autonomous Multi-Agent Research Assistant",
    subtitle: "Agentic AI System",
    tools: "LangChain, CrewAI, LangGraph, Pinecone, Gemini, Streamlit",
    points: [
      "Designed an agentic multi-agent system for autonomous task delegation and coordinated reasoning.",
      "Integrated Pinecone vector memory for RAG-based contextual retrieval and long-term memory.",
      "Implemented tool-calling and Streamlit UI for structured, AI-verified research outputs.",
    ],
    tags: ["Agentic AI", "Multi-Agent", "LLMs", "RAG", "Vector DB"],
  },
  {
    title: "Behavior-Based Intranet Attack Detection",
    subtitle: "AI + ML",
    tools: "Python, Flask, Scikit-learn, MySQL",
    points: [
      "Developed an AI-driven intrusion detection system for real-time anomaly detection.",
      "Implemented Random Forest and SVM models with 95%+ detection accuracy.",
      "Built a Flask-based dashboard for monitoring and security visualization.",
    ],
    tags: ["Machine Learning", "Anomaly Detection", "Security"],
  },
  {
    title: "Mental Health Assessment System",
    subtitle: "AI + ML",
    tools: "Python, Streamlit, Scikit-learn",
    points: [
      "Built a predictive analytics system to assess early mental health risks.",
      "Optimized ML models for 92% accuracy in depression and anxiety classification.",
      "Deployed an interactive Streamlit web application for real-time inference.",
    ],
    tags: ["Predictive Analytics", "Streamlit", "Model Optimization"],
  },
];

const education = [
  { degree: "B.Tech in Information Technology", school: "Mahatma Gandhi Institute of Technology", year: "2019–2025", score: "CGPA: 8.02" },
  { degree: "Intermediate", school: "Sri Chaitanya Junior College", year: "2019–2021", score: "96.5%" },
  { degree: "SSC", school: "Sri Chaitanya Techno Curriculum", year: "2019", score: "GPA: 10/10" },
];

const certifications = [
  "Java Foundations — Oracle Academy",
  "Prompt Engineering Applications — Online Certification",
  "Gemini Certified Student — Google for Education",
  "Yuva AI for All — NASSCOM FutureSkills Prime",
  "Data Science for Everyone — Reliance Foundation (180 Hours)",
  "Data Analytics Bootcamp — GeeksforGeeks",
  "Project Management with Zoho — Reliance Foundation & Skill India",
];

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden" style={{ background: "var(--resume-hero-gradient)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
              Hanumandla Lasya
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Passionate IT student specializing in Agentic & Generative AI. Building autonomous, reasoning-driven multi-agent systems.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <ContactChip icon={<Mail className="w-4 h-4" />} text="lasyah2909@gmail.com" />
              <ContactChip icon={<Phone className="w-4 h-4" />} text="+91 7780377071" />
              <ContactChip icon={<MapPin className="w-4 h-4" />} text="Hyderabad" />
            </div>
            <a href="/H.LASYA_RESUME.docx" download>
              <Button size="lg" variant="secondary" className="gap-2 font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-5xl space-y-16">
        {/* Skills */}
        <Section title="Technical Skills" icon={<Code className="w-5 h-5" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <Card key={group.category} className="border" style={{ borderColor: "var(--resume-section-border)" }}>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "var(--resume-tag-bg)", color: "var(--resume-tag-text)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={<Brain className="w-5 h-5" />}>
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.title} className="border overflow-hidden" style={{ borderColor: "var(--resume-section-border)" }}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">{project.subtitle}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Tools: {project.tools}</p>
                  <ul className="space-y-2 mb-4">
                    {project.points.map((p, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--resume-timeline-dot)" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "var(--resume-tag-bg)", color: "var(--resume-tag-text)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" icon={<BookOpen className="w-5 h-5" />}>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.degree} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ background: "var(--resume-timeline-dot)" }} />
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school} ({edu.year})</p>
                  <p className="text-sm font-medium text-primary">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications" icon={<Award className="w-5 h-5" />}>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 text-sm text-foreground/80 p-3 rounded-lg"
                style={{ background: "var(--resume-tag-bg)" }}
              >
                <Award className="w-4 h-4 shrink-0" style={{ color: "var(--resume-tag-text)" }} />
                {cert}
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 Hanumandla Lasya. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <section>
    <div className="flex items-center gap-3 mb-6">
      <span className="text-primary">{icon}</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const ContactChip = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <span className="flex items-center gap-2 text-sm text-primary-foreground/90 bg-primary-foreground/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
    {icon}
    {text}
  </span>
);

export default ResumePage;
