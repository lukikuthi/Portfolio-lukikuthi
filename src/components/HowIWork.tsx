import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Entendimento detalhado do projeto",
    description:
      "Antes de qualquer linha de código, mergulho no contexto do projeto. Entendo quem são os usuários, quais são os objetivos reais, as restrições técnicas e as expectativas de entrega. Nada é feito sem clareza total do que precisa ser resolvido.",
  },
  {
    number: "02",
    title: "Escopo técnico com orçamento prévio",
    description:
      "Com base no entendimento do projeto, defino o escopo técnico completo e apresento um orçamento prévio transparente. Cada etapa, tecnologia e estimativa é comunicada com clareza antes de qualquer comprometimento.",
  },
  {
    number: "03",
    title: "Proposta formal de prestação de serviço",
    description:
      "Elaboro uma proposta formal detalhada com escopo, prazos, entregas esperadas e condições de pagamento. Tudo documentado e alinhado para que ambas as partes saibam exatamente o que esperar.",
  },
  {
    number: "04",
    title: "Contrato",
    description:
      "Formalizamos o acordo por meio de contrato que protege ambas as partes. O contrato detalha responsabilidades, prazos, condições de pagamento, propriedade intelectual e política de revisões.",
  },
  {
    number: "05",
    title: "Desenvolvimento com acompanhamento",
    description:
      "O desenvolvimento acontece de forma organizada, com comunicação ativa e atualizações periódicas de progresso. Você acompanha cada etapa sem precisar se preocupar com detalhes técnicos — isso é responsabilidade minha.",
  },
  {
    number: "06",
    title: "Prévia antes da entrega",
    description:
      "Antes da entrega final, apresento uma prévia completa do projeto para validação. Esse momento garante alinhamento total, espaço para ajustes e confiança antes do lançamento oficial.",
  },
  {
    number: "07",
    title: "Entrega final com documentação completa",
    description:
      "A entrega final inclui o produto funcionando, documentação técnica, acesso a todos os recursos e orientações de uso. Tudo organizado para que você tenha total autonomia e clareza sobre o que foi construído.",
  },
  {
    number: "08",
    title: "3 meses de garantia para ajustes técnicos",
    description:
      "Após a entrega, ofereço 3 meses de garantia para correção de bugs e ajustes técnicos relacionados ao escopo contratado. O compromisso com a qualidade não termina no deploy.",
  },
];

const HowIWork = () => {
  return (
    <section id="processo" className="py-28 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Processo
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="section-heading text-center mb-16">
            Como eu trabalho.
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={0.08 * (i + 1)}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="process-step p-8 md:p-10"
              >
                <div className="flex items-start gap-6">
                  <span className="text-3xl md:text-4xl font-bold text-muted-foreground/30 shrink-0 leading-none mt-1">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-base md:text-lg" style={{ color: "hsl(var(--text-secondary))" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
