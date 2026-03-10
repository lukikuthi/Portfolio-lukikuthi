import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Desenvolvedor Autônomo",
    period: "Atual",
    description:
      "Atuação independente no desenvolvimento de aplicações full stack, organizando arquitetura, estruturando interfaces modernas, planejando entrega final e mantendo responsabilidade total sobre cada projeto.",
  },
  {
    title: "Startup Host.ee",
    period: "Projeto Acadêmico",
    description:
      "Marketplace completo de agendamento de serviços, desenvolvido integralmente de forma individual (codigo), atuando em UX/UI, front-end, back-end, banco de dados e deploy.",
  },
  {
    title: "Microempreendedorismo",
    period: "Ensino Fundamental e Médio",
    description:
      "Atuação prática com vendas próprias no ambiente escolar. Participação na criação de microempresa educacional do zero. Desenvolvimento de responsabilidade financeira, organização operacional e visão estratégica.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-28 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Experiência
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="section-heading text-center mb-16">
            Trajetória e evolução.
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="experience-card p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="leading-relaxed text-base md:text-lg" style={{ color: "hsl(var(--text-secondary))" }}>
                  {exp.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
