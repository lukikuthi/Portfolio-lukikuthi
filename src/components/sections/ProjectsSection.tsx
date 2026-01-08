import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X, Code2, Layers, Zap, Database } from "lucide-react";
import GlassCard from "../GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: { name: string; icon: LucideIcon }[];
  videoId: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Host.ee",
    shortDesc: "Plataforma de Agendamentos - Marketplace para empresas",
    fullDesc: "Uma plataforma web completa para agendamento de serviços, desenvolvida como um produto real de mercado. O sistema conecta clientes e empresas prestadoras, oferecendo autenticação segura, fluxo de agendamento eficiente e gerenciamento de serviços em um ambiente estável e escalável. Atuei em todas as camadas da aplicação, desde UX/UI até banco de dados e deploy, estruturando uma solução robusta, pronta para evolução como startup.",
    technologies: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "TailwindCSS", icon: Layers },
      { name: "Vite", icon: Zap },
      { name: "i18next", icon: Layers },
    ],
    videoId: "FUMv-jYrxak",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Pulse.",
    shortDesc: "Plataforma de monitoramento de bem-estar e consciência corporal",
    fullDesc: "Uma aplicação web focada em monitoramento pessoal e consciência corporal. Desenvolvi um sistema completo de check-ins diários, métricas físicas e registro de dor, permitindo ao usuário acompanhar sua evolução ao longo do tempo de forma clara e organizada. A aplicação conta com autenticação segura, isolamento total de dados por usuário e uma interface responsiva, pensada para uso contínuo e intuitivo.",
    technologies: [
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "TailwindCSS", icon: Layers },
      { name: "Vite", icon: Zap },
      { name: "React Query", icon: Layers },
      { name: "GitHub Pages", icon: Layers },
    ],
    videoId: "mR7B7Ly9Ih0",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

const ProjectCard = ({ project, onExpand }: { project: Project; onExpand: () => void }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard onClick={onExpand} className="p-8 group">
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.shortDesc}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-primary">
            <span>Ver detalhes</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

const ExpandedProject = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-6 md:p-10"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-muted/50 transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {project.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.fullDesc}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <tech.icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video embed */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm font-mono text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {"// Portfólio"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto representa um desafio único resolvido com código limpo, 
            design intencional e atenção aos detalhes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard
                project={project}
                onExpand={() => setExpandedProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded project modal */}
      <AnimatePresence>
        {expandedProject && (
          <ExpandedProject
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
