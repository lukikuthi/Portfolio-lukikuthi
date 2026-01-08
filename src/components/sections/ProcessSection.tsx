import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import GlassCard from "../GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta",
    description: "Entendo profundamente seu negócio, objetivos e desafios para criar uma estratégia personalizada.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planejamento",
    description: "Arquiteto a solução ideal com foco em escalabilidade, performance e experiência do usuário.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento",
    description: "Código limpo, testado e documentado. Entregas incrementais com comunicação constante.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento",
    description: "Deploy seguro, monitoramento contínuo e suporte dedicado para garantir o sucesso.",
  },
];

const ProcessSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6" id="process">
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
            {"// Como funciona"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Processo de Trabalho
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma metodologia refinada que garante entregas de alta qualidade, 
            dentro do prazo e alinhadas com seus objetivos.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="p-8 h-full relative group">
                {/* Step number */}
                <motion.span
                  className="absolute -top-4 -right-2 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.span>

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass mb-6 group-hover:glow-box transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <step.icon className="h-5 w-5 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connection line (not on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-muted-foreground/20" />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
