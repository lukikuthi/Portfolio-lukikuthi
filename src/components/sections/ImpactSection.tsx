import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import GlassCard from "../GlassCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ImpactCard {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const impactData: ImpactCard[] = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Aumento de Conversão",
    description: "Média de melhoria em projetos de e-commerce",
  },
  {
    icon: Users,
    value: "459+",
    label: "Usuários Ativos",
    description: "Utilizando soluções desenvolvidas por mim",
  },
  {
    icon: Clock,
    value: "40%",
    label: "Redução de Tempo",
    description: "Em processos automatizados",
  },
  {
    icon: Award,
    value: "99%",
    label: "Satisfação",
    description: "Clientes recomendam meu trabalho",
  },
];

const ImpactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="impact">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-3xl bg-primary/30" />

      <div className="max-w-6xl mx-auto relative z-10">
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
            {"// Resultados"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impacto Real
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Números que refletem o compromisso com excelência e resultados 
            mensuráveis em cada projeto.
          </p>
        </motion.div>

        {/* Impact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard className="p-8 text-center h-full group">
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass mb-6 group-hover:glow-box transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-6 w-6 text-primary" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold text-foreground mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {item.value}
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
