import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import GlassCard from "../GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const skills = [{
  icon: Code2,
  title: "Desenvolvimento",
  description: "Código limpo e escalável com as melhores práticas do mercado."
}, {
  icon: Palette,
  title: "Design",
  description: "Interfaces modernas e intuitivas que encantam usuários e elevam a experiência."
}, {
  icon: Rocket,
  title: "Performance",
  description: "Aplicações rápidas e otimizadas que entregam resultados mensuráveis."
}];
const AboutSection = () => {
  const {
    ref,
    isInView
  } = useScrollAnimation();
  return <section className="py-32 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div ref={ref} className="text-center mb-20" initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <motion.span className="inline-block text-sm font-mono text-primary mb-4" initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {}} transition={{
          delay: 0.2
        }}>
            {"// Sobre mim"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quem sou eu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meu nome é Lucas, sou desenvolvedor com base técnica sólida e execução completa de projetos digitais. 
Atuo do planejamento a entrega, criando soluções modernas, eficientes e orientadas a resultados.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => <motion.div key={skill.title} initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)"
        }} animate={isInView ? {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }}>
              <GlassCard className="p-8 h-full group">
                <motion.div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-6 group-hover:glow-box transition-all duration-500" whileHover={{
              scale: 1.1,
              rotate: 5
            }}>
                  <skill.icon className="h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </GlassCard>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;