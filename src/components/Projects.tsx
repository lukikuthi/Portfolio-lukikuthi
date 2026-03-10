import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Linkedin, X, Play, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  tools: string[];
  image: string;
  videoUrl?: string;
  linkedin?: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Host.ee",
    description:
      "Marketplace completo de agendamento de serviços, desenvolvido integralmente de forma individual como Trabalho de Conclusão de Curso. O projeto abrange UX/UI, front-end, back-end, banco de dados e deploy. Inclui autenticação, painel administrativo, gestão de agendamentos e interface responsiva com foco em usabilidade.",
    stack: ["React 18.3.1", "TypeScript", "React Router Dom", "PostgreSQL", "Tailwind CSS", "Vite 5.4.2"],
    tools: ["i18next (Português/Inglês)", "Google Recaptcha v3", "CSS Customizado"],
    image: "/images/projects/hostee.png",
    videoUrl: "https://www.youtube.com/embed/FUMv-jYrxak",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Pulse.",
    description:
      "Plataforma de monitoramento de bem-estar e consciência corporal. O Pulse. é uma aplicação web que permite acompanhar check-ins diários, métricas físicas e registros de dor, ajudando o usuário a desenvolver consciência corporal e monitorar sua evolução ao longo do tempo.",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "PostgreSQL"],
    tools: ["GitHub Pages (Deploy)"],
    image: "/images/projects/pulse.png",
    videoUrl: "https://www.youtube.com/embed/mR7B7Ly9Ih0",
    github: "https://lukikuthi.github.io/Pulse/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Sistema de Estoque e Vendas em C#",
    description:
      "Sistema desktop completo para controle de estoque e vendas, desenvolvido em C# com foco em organização, funcionalidade e interface clara. Inclui cadastro de produtos, controle de entrada e saída, registro de vendas e relatórios.",
    stack: ["C#", ".NET", "Supabase", "Windows Forms"],
    tools: ["PostgreSQL (via Supabase)"],
    image: "/images/projects/estoque.png",
    videoUrl: "https://www.youtube.com/embed/JlXFCnExjWw",
    github: "https://github.com/lukikuthi/Sistema-Estoque-PDV",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Karina Viela — Clínica Estética",
    description:
      "Website profissional para clínica de estética avançada, com design sofisticado, navegação intuitiva e estrutura responsiva voltada para apresentação clara dos serviços.",
    stack: ["Vite", "React 18", "TypeScript", "Tailwind CSS", "React Router", "Framer Motion"],
    tools: ["shadcn/ui"],
    image: "/images/projects/karina-viela.png",
    videoUrl: "https://www.youtube.com/embed/rps2Jt_hUs4",
    github: "https://lukikuthi.github.io/Projeto-Clinica-Estetica/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Barley Pets — Clínica Veterinária",
    description:
      "Site institucional desenvolvido para clínica veterinária, com interface moderna e amigável, focado em apresentar serviços e fortalecer a presença digital da empresa.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    tools: ["shadcn-ui"],
    image: "/images/projects/barley-pets.png",
    videoUrl: "https://www.youtube.com/embed/zFbf625qpxw",
      github: "https://lukikuthi.github.io/barleypets/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Clínica Borcelle — Odontologia",
    description:
      "Site institucional premium para clínica odontológica, desenvolvido com tecnologias modernas e foco em credibilidade, experiência do usuário e interface responsiva.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    tools: ["shadcn/ui"],
    image: "/images/projects/borcelle-odonto.png",
    videoUrl: "https://www.youtube.com/embed/c17F42vTusg",
    github: "https://lukikuthi.github.io/BorcelleClinica/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },


  {
    title: "Estela Duarte — Clínica Psicóloga",
    description:
      "Website institucional desenvolvido para consultório de psicologia, com foco em design minimalista, experiência do usuário e acessibilidade. O projeto apresenta os serviços de psicoterapia da profissional com uma interface elegante, responsiva e otimizada para performance.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    tools: ["shadcn/ui", "Lucide React"],
    image: "/images/projects/estela-duarte.png",
    videoUrl: "https://www.youtube.com/embed/uYHBtUdl4Kw",
    github: "https://lukikuthi.github.io/PsicologaClinica/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Domus Engenharia — Website Institucional",
    description:
      "Website institucional desenvolvido para construtora e incorporadora de alto padrão, com foco em design sofisticado, navegação intuitiva e apresentação clara dos serviços e diferenciais da empresa.",
    stack: ["Vite", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
    tools: ["shadcn/ui"],
    image: "/images/projects/domus-engenharia.png",
    videoUrl: "https://www.youtube.com/embed/LOrlulpLyoE",
    github: "https://lukikuthi.github.io/ConstrutoraDomus/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    title: "Montreval Advocacia",
    description:
      "Website institucional desenvolvido para escritório jurídico, com design elegante e estrutura completa para apresentação de áreas de atuação, equipe, conteúdos jurídicos e contato profissional.",
    stack: ["Vite", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    tools: ["shadcn-ui"],
    image: "/images/projects/montreval-advocacia.png",
    videoUrl: "https://www.youtube.com/embed/D5skxkk8ofA",
    github: "https://lukikuthi.github.io/MontrevalAdvocacia/",
    linkedin: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject, closeModal]);

  return (
    <section id="projetos" className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Projetos Recentes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="section-heading text-center mb-16">
            O que tenho construído.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="project-card group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-[calc(var(--radius)+4px)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Play size={40} className="text-white" />
                      <span className="text-white text-sm font-medium">Ver detalhes</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: "hsl(var(--text-secondary))" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {projects.some(p => p.github) && (
          <AnimatedSection delay={0.6}>
            <div className="text-center">
              <a
                href="https://github.com/lukikuthi"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-muted"
              >
                <X size={16} />
              </button>

              {selectedProject.videoUrl ? (
                <div className="aspect-video w-full rounded-t-[calc(var(--radius)+3px)] overflow-hidden">
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div
                  className="aspect-video w-full rounded-t-[calc(var(--radius)+3px)] flex items-center justify-center"
                  style={{ background: "hsl(0 0% 5%)" }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-25">
                    <Play size={40} />
                    <span className="text-sm font-medium tracking-widest uppercase">Vídeo em breve</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {selectedProject.title}
                </h3>

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.tools.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Ferramentas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="leading-relaxed mb-8" style={{ color: "hsl(var(--text-secondary))" }}>
                  {selectedProject.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button-primary inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Ver Projeto
                    </a>
                  )}
                  {selectedProject.linkedin && (
                    <a
                      href={selectedProject.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button inline-flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button-primary inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
