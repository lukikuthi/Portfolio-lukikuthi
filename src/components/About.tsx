import AnimatedSection from "./AnimatedSection";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Sobre Mim */}
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Sobre Mim
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="section-heading text-center mb-10">
            Mais do que código.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="section-subtext mb-6">
            Meu contato com tecnologia começou aos 9 anos, quando comecei a explorar hardware, manutenção de computadores e o funcionamento interno das máquinas. Esse contato precoce construiu uma base lógica sólida que me acompanha até hoje. Com o tempo, migrei naturalmente para a programação de forma autodidata, experimentando, quebrando e reconstruindo até entender como as coisas funcionam de verdade.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="section-subtext mb-6">
            Concluí o ensino médio técnico em Desenvolvimento de Sistemas, onde consolidei fundamentos de organização, arquitetura de software e boas práticas de engenharia. Foi onde aprendi que código bom não é só código que funciona — é código que escala, que outros entendem e que resiste ao tempo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="section-subtext mb-6">
            Desde cedo desenvolvi uma visão de negócios forte, com vivência real em empreendedorismo. Essa experiência moldou minha forma de pensar projetos: com foco em responsabilidade, entrega real e impacto concreto. Não considero "impossível" como opção — sempre busco a solução mais eficiente antes de adicionar complexidade desnecessária.
          </p>
        </AnimatedSection>

        {/* Trajetória e Evolução */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 mt-16 text-center">
            Trajetória e evolução.
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.35}>
          <p className="section-subtext mb-6">
            A trajetória que construí não é linear — ela é feita de curiosidade, tentativa e evolução constante. Do hardware aos 9 anos até o desenvolvimento full stack hoje, cada etapa adicionou uma camada de profundidade ao meu trabalho. O ensino técnico trouxe estrutura. O empreendedorismo trouxe visão. A programação trouxe a ferramenta para materializar tudo isso.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="section-subtext mb-6">
            Hoje, tenho capacidade de desenvolver projetos de ponta a ponta — desde a concepção da ideia até o deploy final — com organização, responsabilidade técnica e foco em resultado.
          </p>
        </AnimatedSection>

        {/* O que tenho construído */}
        <AnimatedSection delay={0.45}>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 mt-16 text-center">
            O que tenho construído.
          </h3>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <p className="section-subtext mb-6">
            Cada projeto que construo é tratado como um produto real — com arquitetura pensada, interface refinada e entrega completa. Trabalho com stack moderna (React, TypeScript, Node.js, bancos relacionais e não-relacionais) e priorizo sempre a qualidade do código, a experiência do usuário e a manutenibilidade a longo prazo.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.55}>
          <p className="section-subtext mb-10">
            Meu objetivo não é entregar "algo que funcione" — é entregar algo que funcione bem, que seja organizado, e que eu teria orgulho de mostrar. Cada detalhe importa, da arquitetura ao pixel final.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/lucas-kikuthi-866358246/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
